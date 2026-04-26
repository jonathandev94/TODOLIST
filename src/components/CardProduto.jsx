import styled from 'styled-components';
import { useState } from 'react';

// Estilos definidos com Styled Components
const CardContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  border: 1px solid #eee;
`;

const NomeProduto = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Preco = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 15px 0;
`;

// Uso do $ para evitar que a prop vá para o HTML
const BotaoCarrinho = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: ${props => props.$adicionado ? '#198754' : '#6c757d'};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function CardProduto() {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <CardContainer>
      <NomeProduto>Ração Premium Gold</NomeProduto>
      <Preco>R$ 89,90</Preco>
      <BotaoCarrinho 
        $adicionado={adicionado} 
        onClick={() => setAdicionado(!adicionado)}
      >
        {adicionado ? '✔ No Carrinho' : 'Adicionar ao carrinho'}
      </BotaoCarrinho>
    </CardContainer>
  );
}