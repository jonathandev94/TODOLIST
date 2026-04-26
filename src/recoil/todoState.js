import { atom, selector } from 'recoil';

// Matéria-prima: A lista bruta
export const listaTodoState = atom({
  key: 'listaTodoState',
  default: [],
});

// Filtro selecionado: 'Todas', 'Concluídas' ou 'Pendentes'
export const filtroTodoState = atom({
  key: 'filtroTodoState',
  default: 'Todas',
});

// Produto Processado: Lista já filtrada para exibir na tela
export const listaFiltradaState = selector({
  key: 'listaFiltradaState',
  get: ({ get }) => {
    const lista = get(listaTodoState);
    const filtro = get(filtroTodoState);

    switch (filtro) {
      case 'Concluídas':
        return lista.filter((item) => item.estaConcluido);
      case 'Pendentes':
        return lista.filter((item) => !item.estaConcluido);
      default:
        return lista;
    }
  },
});