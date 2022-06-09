import React from "react";
import Tasks from "./features/tasks/TasksPage/Tasks";
import Task from "./features/tasks/TaskPage/Task";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import Navigation from "./Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

export default () => (
    <HashRouter>
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <Task />
            </Route>
            <Route path={toTasks()}>
                <Tasks />
            </Route>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);