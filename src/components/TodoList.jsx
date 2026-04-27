import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaFiltradaState, listaTodoState } from '../state/atom';
import { ListItem, TaskText } from '../styles/styles';

export default function TodoList() {
  const lista = useRecoilValue(listaFiltradaState);
  const setLista = useSetRecoilState(listaTodoState);

  const toggle = (id) => {
    setLista((old) => old.map(t => t.id === id ? {...t, concluido: !t.concluido} : t));
  };

  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {lista.map(t => (
        <ListItem key={t.id} onClick={() => toggle(t.id)}>
          <TaskText $done={t.concluido}>{t.texto}</TaskText>
          <span>{t.concluido ? '✅' : '⏳'}</span>
        </ListItem>
      ))}
    </ul>
  );
}