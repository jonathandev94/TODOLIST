import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { filteredTodos } = useTodo();

  return (
    <div className="space-y-2">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {filteredTodos.length === 0 && (
        <p className="text-center text-gray-400 mt-10">Nenhuma tarefa por aqui...</p>
      )}
    </div>
  );
}