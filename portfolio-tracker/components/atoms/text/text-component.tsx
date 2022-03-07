import { Text } from "./text-styled";

type Props = {
  text: string;
};

function TextComponent({ text }: Props) {
  return <Text>{text}</Text>;
}

export default TextComponent;
