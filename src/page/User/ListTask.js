import Card from "../Card/Card";
import { React, useEffect, useState } from "react";
import axios from "axios";
import AddModal from "../AddTask/AddModal";
// import "jquery-ui/dist/jquery-ui"
// import "jquery-ui/ui/core"
// import $ from "jquery"

const TaskContainer = ({ title,section, taskList }) => {
  const sortByDateMethods = {
    none: (a, b) => true,
    ascending: (a, b) => a.due_date - b.due_date,
    descending: (a, b) => b.due_date - a.due_date,
  };
  const [sortOrder, setSortOrder] = useState("none");
  // console.log(`sortOrder ${title}`, sortOrder);
  return (
    <div className="list-task__section">
      <div className="list-task__section--top">
        <h6>{title}</h6>
        <div className="list-task__section--top__add">
        <AddModal taskSection={section}/>
        </div>
        
      </div>
      <select
        defaultValue={"none"}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="none">None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      {/* <Add></Add> */}
      <div className="task-container ui-widget-header">
        {taskList
          .sort(sortByDateMethods[sortOrder])
          .map((task) => (
            <Card key={task.id} data={task} />
          ))}
        {/* {<Card data={{ content: "ABCD", due_date: 12326557364 }} />} */}
      </div>
    </div>
  );
};
function ListTask() {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    axios
      .get("https://61ce733e7067f600179c5ea7.mockapi.io/mn/tasks")
      .then((res) => {
        setTasksList(res.data);
      });
  }, []);
  // useEffect(() => {
  //   $(".card").draggable()
  //   $(".task-container").droppable();
  // }, [])
  return (
    <div className="list-task">
      <TaskContainer
        title={"BackLog"}
        section ={ "backlog"}
        taskList={tasksList.filter((task) => task.section === "backlog")}
      />
      <TaskContainer
        title={"ToDo"}
        section ={ "todo"}
        taskList={tasksList.filter((task) => task.section === "todo")}
      />
      <TaskContainer
        title={"Doing"}
        section ={ "doing"}
        taskList={tasksList.filter((task) => task.section === "doing")}
      />
      <TaskContainer
        title={"Done"}
        section ={ "done"}
        taskList={tasksList.filter((task) => task.section === "done")}
      />
    </div>
  );
}

export default ListTask;
