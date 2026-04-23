import React from 'react';
import { useTodo } from '../context/TodoContext';

const TodoItem = React.memo(({ todo }) => {
  const { toggleTodo, removeTodo } = useTodo();
  
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border mb-2">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" checked={todo.completed} 
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 accent-indigo-600"
        />
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-800 font-medium'}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition">
        🗑️
      </button>
    </div>
  );
});

export default TodoItem;