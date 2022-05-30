import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty && (
                <React.Fragment>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone} >
                        Ukończ wszystkie
                    </Button>
                </React.Fragment>
            )}
        </Wrapper>
    )
};

export default Buttons;