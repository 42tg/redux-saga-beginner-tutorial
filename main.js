import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import TodoList from './TodoList'

import reducer from './reducers'

import {addTodo, toggleTodo, deleteTodo } from './actions'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
)

function render() {
  ReactDOM.render(
    <TodoList
      value={store.getState()}
        onCreate={(value) => store.dispatch(addTodo(value))}
        onToggle={(id) => store.dispatch(toggleTodo(id))}
        onDelete={(id) => store.dispatch(deleteTodo(id))} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
