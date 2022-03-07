import { UserImg } from "./user-img-styled";

type Props = {
  userImg: string | undefined;
  username: string | undefined;
};

function UserImgComponent({ userImg, username }: Props) {
  return <UserImg src={userImg} alt={username} />;
}

export default UserImgComponent;
