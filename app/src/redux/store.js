import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})

const store = configureStore({
    reducer
})

export default store;