import { useRecoilState } from 'recoil';
import { filtroTodoState } from '../state/atom';
import { FilterContainer, FilterBtn } from '../styles/styles'; // Apenas o import

export default function TodoFilters() {
  const [filtro, setFiltro] = useRecoilState(filtroTodoState);

  return (
    <FilterContainer>
      <FilterBtn $active={filtro === 'todos'} onClick={() => setFiltro('todos')}>Todas</FilterBtn>
      <FilterBtn $active={filtro === 'concluidos'} onClick={() => setFiltro('concluidos')}>Concluídas</FilterBtn>
      <FilterBtn $active={filtro === 'pendentes'} onClick={() => setFiltro('pendentes')}>Pendentes</FilterBtn>
    </FilterContainer>
  );
}