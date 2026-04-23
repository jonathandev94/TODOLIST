import { createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todo-list', []);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Memoization: Filtra a lista apenas quando 'todos' ou 'filter' mudar
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed': return todos.filter(t => t.completed);
      case 'pending': return todos.filter(t => !t.completed);
      default: return todos;
    }
  }, [todos, filter]);

  return (
    <TodoContext.Provider value={{ filteredTodos, filter, setFilter, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);