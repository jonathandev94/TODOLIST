import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f4f7f6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const AppWrapper = styled.div`
  max-width: 450px;
  margin: 60px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 25px;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  &:focus { border-color: #007bff; }
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover { background-color: #0056b3; }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterBtn = styled.button`
  flex: 1;
  margin: 0 2px;
  padding: 8px;
  font-size: 0.85rem;
  border: 1px solid #007bff;
  background: ${props => props.$active ? '#007bff' : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#007bff'};
  border-radius: 4px;
  cursor: pointer;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover { background: #f9f9f9; }
`;

export const TaskText = styled.span`
  text-decoration: ${props => props.$done ? 'line-through' : 'none'};
  color: ${props => props.$done ? '#888' : '#333'};
`;