import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { useState } from "react";
import axios from "axios";

function AddModal({ taskSection}) {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState({
    section: taskSection,
    content: "",
    description: "",
    status: false,
    due_date: "",
    priority: "high",
  });

  const handlerInput = (e) => {
    const { name, value } = e.target;
    console.log(task);
    setTask({
      ...task,
      [name]: value,
    });
  };
  const tooggle = () => {
    setModal(!modal);
  };
  const onRedirect = () => {
    setTask({}); //set lại state task là đói tượng rỗng
    tooggle();

  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    task.due_date = new Date(task.due_date).getTime();
    axios
      .post("https://61ce733e7067f600179c5ea7.mockapi.io/mn/tasks", task)
      .then(function (response) {
        console.log(response);
        window.location.reload();
        onRedirect();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Button className="add-task" color="black" onClick={tooggle}>+</Button>
      <Modal isOpen={modal} toggle={tooggle}>
        <form
          onSubmit={handleSubmitForm}
          encType="multipart/form-data"
          method="post"
        >
          <ModalHeader toggle={tooggle}>Add a new task</ModalHeader>
          <ModalBody>
            {/* <FormGroup>
              <Label for="exampleSelect">Section</Label>
              <Input
                id="exampleSelect"
                name="section"
                type="select"
                onChange={handlerInput}
                value={"backlog"}
              >
                <option value={"backlog"}>
                  Backlog
                </option>
                <option value={"todo"}>To do</option>
                <option value={"doing"}>Doing</option>
                <option value={"done"}>Done</option>
              </Input>
            </FormGroup> */}
            <FormGroup>
              <Label>Content</Label>
              <Input
                id="content"
                value={task ? task.content : ""}
                onChange={handlerInput}
                name="content"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                id="description"
                value={task ? task.description : ""}
                onChange={handlerInput}
                name="description"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Priority</Label>
              <Input
                id="exampleSelect"
                name="priority"
                type="select"
                onChange={handlerInput}
              >
                <option value={"high"}>High</option>
                <option value={"medium"}>Medium</option>
                <option value={"low"}>Low</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Due date</Label>
              <Input
                id="due_date"
                value={task ? task.due_date : ""}
                onChange={handlerInput}
                name="due_date"
                type="date"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Thêm
            </Button>{" "}
            <Button onClick={function noRefCheck() {}}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
export default AddModal;
