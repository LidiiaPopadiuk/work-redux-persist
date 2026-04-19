import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "redux/todos/todosSlice";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  
  const handleChange = () => {
    dispatch(changeTodo(task.id));
    console.log(task.id);
  }

  const handleRemove = () => {
    dispatch(removeTodo(task.id));
  }
  
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button" onClick={handleRemove}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
