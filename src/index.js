// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-tagsinput/react-tagsinput.css'
import 'react-table/react-table.css'
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import {todoReducer} from './reducers/todoReducer'
import {usersDataReducer} from './reducers/usersReducer'
import {tagsReducer} from './reducers/tagsReducer'
import {thunk, applyMiddleware} from './thunkWithQuery'
import {initialState} from "./appInitialState";

const reducer = combineReducers({
  todos: todoReducer,
  usersData: usersDataReducer,
  tags: tagsReducer
})

const dsRead = {
  getLayout() {
    return {x: 5, y: 10}
  }
}

const thunkMiddleware = thunk({dsRead})
const store = createStore(
  reducer,
  initialState,
  applyMiddleware({dsRead}, thunkMiddleware))
store.query = selector => selector(store.getState(), {dsRead})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
