import { atom } from 'recoil';

// Átomo para a lista de tarefas
export const listaTodoState = atom({
  key: 'listaTodoState',
  default: [], // Começa com lista vazia
});

// Átomo para o filtro (Todas, Concluídas, Pendentes)
export const filtroTodoState = atom({
  key: 'filtroTodoState',
  default: 'Todas',
});