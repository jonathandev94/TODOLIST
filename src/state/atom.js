import { atom, selector } from 'recoil';

// Chave única para a lista
export const listaTodoState = atom({
  key: 'listaTodoState', 
  default: [],
});

// Chave única para o filtro
export const filtroTodoState = atom({
  key: 'filtroTodoState',
  default: 'todos',
});

// Selector para a lógica de filtro
export const listaFiltradaState = selector({
  key: 'listaFiltradaState',
  get: ({ get }) => {
    const lista = get(listaTodoState);
    const filtro = get(filtroTodoState);

    switch (filtro) {
      case 'concluidos':
        return lista.filter(item => item.concluido);
      case 'pendentes':
        return lista.filter(item => !item.concluido);
      default:
        return lista;
    }
  },
});