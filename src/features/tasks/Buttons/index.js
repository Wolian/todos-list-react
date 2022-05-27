import React from "react";
import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Wrapper>
        {tasks.length > 0 && (
            <React.Fragment>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)} >
                    Ukończ wszystkie
                </Button>
            </React.Fragment>
        )}
    </Wrapper>
);

export default Buttons;