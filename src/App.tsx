import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { useAppSelector } from './app/hooks';
import { getTodos } from './redux/todoSlice';

function App() {
  const todos = useAppSelector(getTodos).todos;

  return (
    <div className="App">
      <header className="App-header">
        <TodoList
          isCompletedList={false}
          todoList={todos.filter(x => !x.completed)}
        />
        <TodoList
          isCompletedList
          todoList={todos.filter(x => x.completed)}
        />
      </header>
    </div>
  );
}

export default App;
