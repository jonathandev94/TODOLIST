import { selector } from 'recoil';
import { listaTodoState, filtroTodoState } from './atoms';

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