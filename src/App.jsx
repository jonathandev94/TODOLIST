import CardProduto from './components/CardProduto';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

function App() {
  return (
    <PageWrapper>
      <CardProduto />
    </PageWrapper>
  );
}

export default App;