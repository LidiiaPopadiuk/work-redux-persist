import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/todos/todosSelectors";

export const TaskList = () => {
  const tasks = useSelector(selectTodos);
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
