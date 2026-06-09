import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
// import { selectTodos } from "redux/todos/todosSelectors";
import { selectCount } from "redux/todos/todosSelectors";

export const TaskCounter = () => {
  const { active, commpleted } = useSelector(selectCount);
  // console.log("tasks", tasks);

  // const activeTasks = tasks.filter(task => !task.completed);
  // const completedTasks = tasks.filter(task => task.completed);
  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {commpleted}</p>
    </div>
  );
};
