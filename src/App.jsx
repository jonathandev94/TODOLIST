import { GlobalStyle, AppWrapper, Title } from './styles/styles';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Title>FocusUp ✅</Title>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </AppWrapper>
    </>
  );
}

export default App;