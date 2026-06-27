import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "redux/todos/todosOperation";

export const ListPage = () => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchTodos());
    // });

    return (
        <>
            <AppBar />
            <TaskForm />
            <TaskList />
        </>
    )
}