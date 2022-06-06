import React from "react";
import Form from "./Form";
import TaskList from "../TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
 
const TasksPage = () => {
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
          </Button>
        }
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />

    </Container>
  );
};

export default TasksPage;
