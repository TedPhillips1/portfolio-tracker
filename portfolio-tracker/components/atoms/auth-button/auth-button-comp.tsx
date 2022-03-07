import { AuthButton } from "./auth-button-styled";

type Props = {
  text: string;
};

function AuthButtonComponent({ text }: Props) {
  return <AuthButton>{text}</AuthButton>;
}

export default AuthButtonComponent;
