import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/todos/todosSelectors";
import { selectNeededTodos } from 'redux/filter/filterSelectors'

export const TaskList = () => {
  const tasks = useSelector(selectNeededTodos);
  
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