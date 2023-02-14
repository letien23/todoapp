import axios from "axios";
import { React, useEffect, useState } from "react";
import Card from "../Card/Card";




// const SortDate = ({ title, Sortdata }) => {
//   return (
//     <div className="list-task__section">
//       <div className="list-task__section--top">
//         {/* <h6>{title}</h6>
//         <button>+</button> */}
//       </div>
     
//       <div className="task-container">
//         {Sortdata.map((due_date) => (
//           <Card key={due_date.id} data={due_date} />
//         ))}
        
//       </div>
//     </div>
//   );
// };
function SortByDay() {
  const [sortState, setSortState] = useState("none");
  const [data, setData] = useState({ taskList: [], isLoaded: false });
  const sortByDateMethods = {
    none: (a, b) => true,
    ascending: (a, b) => a.due_date - b.due_date,
    descending: (a, b) => b.due_date - a.due_date,
  };
  useEffect(() => {
    if (!data.isLoaded)
      axios
        .get("https://61ce733e7067f600179c5ea7.mockapi.io/mn/tasks")
        .then((res) => {
          setData({taskList: res.data, isLoaded: true});
        });
  }, [data.isLoaded]);
  console.log(`data`, data);
 
  return (
    <div className="main">
      <select
        defaultValue={"none"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="none">None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <ul>
        {data.taskList.sort(sortByDateMethods[sortState]).map((el, i) => (
          <li key={i}>
            {el.id} - {new Date(el.due_date).toDateString()}
          </li>
        ))}
      </ul>
     
    </div>
  );
}
export default SortByDay;
