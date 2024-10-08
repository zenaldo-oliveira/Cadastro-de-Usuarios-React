import { useRef } from 'react';
import api from '../../services/api';

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  Input,
  InputLabel,
} from './styles';

import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });

    console.log(data);
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel htmlFor="nome">
              Nome <span> *</span>
            </InputLabel>
            <Input
              id="nome"
              type="text"
              placeholder="Nome do usuário"
              ref={inputName}
            />
          </div>

          <div>
            <InputLabel htmlFor="idade">
              Idade <span> *</span>
            </InputLabel>
            <Input
              id="idade"
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel htmlFor="email">
            E-mail <span> *</span>
          </InputLabel>
          <Input
            id="email"
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
