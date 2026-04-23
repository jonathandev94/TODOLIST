import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm'; // Crie este para o input
import TodoList from './components/TodoList'; // Crie este para o .map()
import TodoFilters from './components/TodoFilters';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">FocusUp</h1>
            <p className="text-slate-500">Gestão de Tarefas Avançada</p>
          </header>
          
          <TodoForm />
          <TodoFilters />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;