import styled from 'styled-components';

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;

  &:focus {
    transform: translateX(5px);
  }
`;

export const InputLable = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`;
