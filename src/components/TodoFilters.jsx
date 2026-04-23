import { useTodo } from '../context/TodoContext';

export default function TodoFilters() {
  const { filter, setFilter } = useTodo();

  const btnClass = (f) => `px-4 py-2 rounded-lg text-sm font-bold transition ${
    filter === f ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
  }`;

  return (
    <div className="flex gap-2 mb-6 justify-center">
      <button onClick={() => setFilter('all')} className={btnClass('all')}>Todas</button>
      <button onClick={() => setFilter('pending')} className={btnClass('pending')}>Pendentes</button>
      <button onClick={() => setFilter('completed')} className={btnClass('completed')}>Concluídas</button>
    </div>
  );
}