import { UserImg } from "./user-img-styled";

type Props = {
  userImg: string;
  username: string;
};

function UserImgComponent({ userImg, username }: Props) {
  return <UserImg src={userImg} alt={username} />;
}

export default UserImgComponent;
