import { Image } from "./image-styled";

type Props = {
  source: string;
  alt: string;
};

function ImageComponent({ source, alt }: Props) {
  return <Image src={source} alt={alt} />;
}

export default ImageComponent;
