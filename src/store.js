import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware  from "redux-saga";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";
import tasksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./features/tasks/rootSaga";


const SagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);