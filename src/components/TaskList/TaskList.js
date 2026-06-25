import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/todos/todosSelectors";
import { selectNeededTodos } from 'redux/filter/filterSelectors'
import { selectIds } from "redux/todos/todosSlice";

export const TaskList = () => {
  const tasks = useSelector(selectNeededTodos);
  
  console.log(tasks);
  return (
    <ul className={css.list}>
      {tasks.map(taskId => (
        <li className={css.listItem} key={taskId.id}>
          <Task task={taskId} />
        </li>
      ))}
    </ul>
  );
};