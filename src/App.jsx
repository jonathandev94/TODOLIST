import { RecoilRoot } from 'recoil';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">Lista Recoil EBAC</h1>
        <TodoForm />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;