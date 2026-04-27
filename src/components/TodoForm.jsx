import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { listaTodoState } from '../state/atom';
import { useState } from 'react';

const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e1e4e8;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;
  &:focus { border-color: #4a90e2; }
`;

const Button = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background-color: #357abd; }
`;

export default function TodoForm() {
  const [texto, setTexto] = useState('');
  const setLista = useSetRecoilState(listaTodoState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setLista((velha) => [...velha, { id: Date.now(), texto, concluido: false }]);
    setTexto('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input value={texto} onChange={e => setTexto(e.target.value)} placeholder="O que precisa ser feito?" />
      <Button type="submit">Adicionar</Button>
    </FormContainer>
  );
}