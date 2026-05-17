import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
// import { changeTodo, removeTodo } from "redux/todos/todosSlice";
import { changeTodos, removeTodos } from "redux/todos/todosOperation";
import { useState } from "react";
import { EditForm } from "components/EditForm/EditForm";


export const Task = ({ task }) => {
  const [open, isOpen] = useState(false)
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeTodos({ ...task, completed: !task.completed }));
    console.log({ ...task, completed: !task.completed });
  };

  const handleRemove = () => {
    dispatch(removeTodos(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={() => isOpen(true)} type="button">Edit</button>
      <button className={css.btn} type="button" onClick={handleRemove}>
        <MdClose size={24} />
      </button> 

      {open && <EditForm data={task} close={() => isOpen(false)}/>}
    </div>
  );
};
