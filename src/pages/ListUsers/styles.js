import styled from 'styled-components';

export const Container = styled.div`
  background: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUser = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02); /* Efeito suave ao passar o mouse */
  }

  h3 {
    color: #fff;
    font-size: 19px;
    margin-bottom: 3px;
    margin-bottom: 3p;
    text-transform: capitalize;
  }

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 200;
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;
  transition: transform 0.3s, filter 0.3s; /* Animação suave */

  &:hover {
    opacity: 0.7;
    transform: scale(1.1); /* Leve crescimento ao passar o mouse */
  }

  &:active {
    transform: scale(0.9); /* Reduz o tamanho no clique */
    filter: brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(6761%)
      hue-rotate(347deg) brightness(96%) contrast(120%);
    /* Muda para vermelho ao clicar */
  }
`;

export const AvatarUser = styled.img`
  height: 75px;
  border-radius: 50%; /* Tornando a imagem circular */
`;

export const EmailText = styled.p`
  color: #e0e0e0;
  font-size: 14px;
  line-height: 1.5;
  margin: 5px 0;
  word-break: break-word; /* Evita que textos grandes quebrem o layout */
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  span {
    font-weight: 600; /* Destaque para partes importantes */
    color: #ff6f61; /* Tom sutil para realçar informações */
  }
`;
