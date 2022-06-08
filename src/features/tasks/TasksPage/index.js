import React from "react";
import Form from "./Form";
import TaskList from "../TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useLocation } from "react-router-dom";
import  FetchExampleTasksButton   from "../FetchExampleTasksButton";



const TasksPage = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.get("szukaj");

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
        
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />

    </Container>
  );
};

export default TasksPage;
