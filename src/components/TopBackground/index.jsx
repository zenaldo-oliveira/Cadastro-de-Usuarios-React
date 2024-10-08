import UserImage from '../../assets/users.png';
import { Background } from './styles';

function TopBackground() {
  return (
    <Background>
      <img src={UserImage} alt="Imagem de usuários" />
    </Background>
  );
}

export default TopBackground;
