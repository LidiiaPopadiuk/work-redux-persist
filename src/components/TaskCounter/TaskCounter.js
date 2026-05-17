import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/todos/todosSelectors";

export const TaskCounter = () => {
  const tasks = useSelector(selectTodos);
  console.log("tasks", tasks);
  
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  return (
    <div>
      <p className={css.text}>Active: {activeTasks.length}</p>
      <p className={css.text}>Completed: {completedTasks.length}</p>
    </div>
  );
};
