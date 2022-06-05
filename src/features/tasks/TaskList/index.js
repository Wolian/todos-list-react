import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectHideDone, selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id} hidden={task.done && hideDone}>

                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;