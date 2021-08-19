import TodoList from './components/TodoList';
import './App.css';
import { useAppSelector } from './app/hooks';
import { getTodos } from './redux/todoSlice';

function App() {
  const todos = useAppSelector(getTodos).todos;

  return (
    <div className="App">
      <TodoList
        isCompletedList={false}
        todoList={todos.filter(x => !x.completed)}
      />
      <TodoList
        isCompletedList
        todoList={todos.filter(x => x.completed)}
      />
    </div>
  );
}

export default App;
