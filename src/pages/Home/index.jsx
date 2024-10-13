import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  Input,
  InputLable,
} from '../styles';

import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';

// ... resto do código permanece o mesmo

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
    });

    console.log(data);
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLable>
              Nome<span> #</span>
            </InputLable>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLable>
              Idade<span> #</span>
            </InputLable>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLable>
            E-mail<span> #</span>
          </InputLable>
          <Input
            type="email"
            placeholder="E-mail do Usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>
      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuários
      </Button>
    </Container>
  );
}

export default Home;

/*
  export default - Exportar padrão = default - uma coisa por página
  apenas Exportar - colocar export antes das funções componente React
*/
