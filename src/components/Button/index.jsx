import { Button } from './styles';

function DefaultButton({ children, ...props }) {
  // ... spread operator -> Todo o resto

  console.log(props);

  return <Button {...props}>{children}</Button>;
}

export default DefaultButton;
