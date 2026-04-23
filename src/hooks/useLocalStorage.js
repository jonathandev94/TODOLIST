// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Tenta buscar o valor no LocalStorage ao iniciar
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Se existir, transforma de texto para objeto JS, se não, usa o valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erro ao ler LocalStorage", error);
      return initialValue;
    }
  });

  // Toda vez que o storedValue mudar, ele salva automaticamente no navegador
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erro ao salvar no LocalStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}