import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input 
        type="text" value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa..."
        className="flex-1 p-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <button className="bg-indigo-600 text-white px-6 rounded-xl font-bold hover:bg-indigo-700 transition">
        +
      </button>
    </form>
  );
}