import { MdClose, MdEdit } from "react-icons/md";
import { IoIosCloseCircle, IoMdCheckmark } from "react-icons/io";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
// import { changeTodo, removeTodo } from "redux/todos/todosSlice";
import {
  changeTodos,
  removeTodos,
  updateTodo,
} from "redux/todos/todosOperation";
import { useState } from "react";
import { EditForm } from "components/EditForm/EditForm";

export const Task = ({ task }) => {
  // const [open, isOpen] = useState(false)
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = () => {
    dispatch(changeTodos({ ...task, completed: !task.completed }));
    console.log({ ...task, completed: !task.completed });
  };

  const handleRemove = () => {
    dispatch(removeTodos(task.id));
  };

  const handleDoubleClick = e => {
    setIsClicked(true);
    return console.log(e);
  };

  const handleUpdate = e => {
    e.preventDefault();
    console.log(e.target.elements.newTodo.value.trim());

    if (!e.target.elements.newTodo.value.trim()) {
      setIsClicked(false);
      return;
    }
    dispatch(
      updateTodo({ ...task, text: e.target.elements.newTodo.value.trim() })
    );
    console.log(task);

    console.log("e.target.value", e.target.value);
    setIsClicked(false);
  };

  const handleKeyDown = e => {
    if (e.key === "Escape") {
      setIsClicked(false);
    }
    if (e.key === "Enter") {
      if (!e.target.value.trim()) {
        setIsClicked(false);
        return;
      }
      dispatch(updateTodo({ ...task, text: e.target.value.trim() }));
    }
  };

  // const handleBlur = e => {
  //   handleUpdate(e);
  // };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange}
      />
      {isClicked ? (
        <form className={css.form} onSubmit={handleUpdate}>
          <input
            defaultValue={task.text}
            type="text"
            className={css.text}
            onKeyDown={handleKeyDown}
            name="newTodo"
            // onBlur={handleUpdate}
          />
          <button
            className={css.btn}
            type="button"
            onClick={() => setIsClicked(false)}
          >
            <IoIosCloseCircle size={24} />
          </button>
          <button className={css.btnCheck} type="submit">
            <IoMdCheckmark size={24} />
          </button>
        </form>
      ) : (
        <>
          <p className={css.text} onDoubleClick={handleDoubleClick}>
            {task.text}
          </p>
          <button
            className={css.btnEdit}
            onClick={handleDoubleClick}
            type="button"
          >
            <MdEdit size={24} />
          </button>
          <button className={css.btn} type="button" onClick={handleRemove}>
            <MdClose size={24} />
          </button>
        </>
      )}
      {/* <button onClick={() => isOpen(true)} type="button">Edit</button> */}
      {/* <button className={css.btn} type="button" onClick={handleRemove}>
        <MdClose size={24} />
      </button> */}

      {/* {open && <EditForm data={task} close={() => isOpen(false)}/>} */}
    </div>
  );
};
