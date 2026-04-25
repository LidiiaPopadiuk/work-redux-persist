import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "redux/filter/filterSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch()
  return (
    <div className={css.wrapper}>
      <Button onClick={(e) => dispatch(changeFilter(e.target.textContent))}>All</Button>
      <Button onClick={(e) => dispatch(changeFilter(e.target.textContent))}>Active</Button>
      <Button onClick={(e) => dispatch(changeFilter(e.target.textContent))}>Completed</Button>
    </div>
  );
};