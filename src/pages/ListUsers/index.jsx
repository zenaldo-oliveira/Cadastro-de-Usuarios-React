import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';
import Title from '../../components/Title';
import TopBackground from '../../components/TopBackground';
import Trash from '../../assets/trash.svg';

import {
  Container,
  ContainerUsers,
  CardUser,
  TrashIcon,
  AvatarUser,
} from './styles';

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios');

      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/usuario/${id}`);

    const updatedUsers = users.filter((user) => user.id != id);

    setUsers(updatedUsers);
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUser key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="icon-lixo"
              onClick={() => deleteUser(user.id)}
            />
          </CardUser>
        ))}
      </ContainerUsers>

      <Button type="button" theme="primary" onClick={() => navigate('/')}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
