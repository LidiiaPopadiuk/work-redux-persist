import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/todos/todosSelectors";
import { neededTodos } from 'redux/filter/filterSelectors'

export const TaskList = () => {
  const tasks = useSelector(neededTodos);
  
  console.log(tasks);
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};