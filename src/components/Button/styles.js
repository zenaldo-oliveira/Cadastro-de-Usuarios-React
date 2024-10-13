import styled from 'styled-components';

export const Button = styled.button`
  border: ${(props) => (props.theme === 'primary' ? 'none' : '1px solid #fff')};
  background: ${(props) =>
    props.theme === 'primary'
      ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'
      : 'transparent'};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.theme === 'primary'
        ? 'linear-gradient(180deg, #9c27b0 0%, #7b1fa2 100%)'
        : 'rgba(255, 255, 255, 0.1)'};
    color: ${(props) => (props.theme === 'primary' ? '#fff' : '#ff8a80')};
    transform: scale(1.05); /* Efeito de leve aumento */
  }

  &:active {
    color: #fff;
    background: ${(props) =>
      props.theme === 'primary'
        ? 'linear-gradient(180deg, #d500f9 0%, #aa00ff 100%)'
        : 'rgba(255, 255, 255, 0.2)'};
    transform: scale(0.95); /* Leve redução para indicar clique */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(128, 0, 128, 0.6); /* Glow roxo ao focar */
  }
`;
