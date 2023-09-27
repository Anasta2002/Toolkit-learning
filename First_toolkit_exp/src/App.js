import './App.css';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoContainer from './components/TodoContainer/TodoContainer';

function App() {
  return (
    <div className='form'>
      <AddTodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
