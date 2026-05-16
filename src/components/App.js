import { AppBar } from "components/AppBar/AppBar";
import { Layout } from "components/Layout/Layout";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "redux/todos/todosOperation";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  });
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
