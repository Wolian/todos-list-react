import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};