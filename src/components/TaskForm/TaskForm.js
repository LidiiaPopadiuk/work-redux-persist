import { Button } from "components/Button/Button";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/todos/todosSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value.trim();
      dispatch(addTodo(text));
      form.reset();
      };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
