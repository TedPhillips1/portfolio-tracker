import styled, { keyframes, css } from "styled-components";

type Props = {
  toggle: boolean;
};

const fadeAcross = keyframes`
0% {
  opacity: 0;
  transform: translateX(30px)
}
100% {
  opacity: 1;
  transform: translateX(0px)
}
`;

export const LandingText = styled.p`
  font-size: 20px;
  margin-top: -20px;
  padding: 10px;
  color: white;
  ${(props: Props) =>
    props.toggle
      ? css`

          animation: ${fadeAcross} 1.5s 1;
        `
      : css`
          opacity: 0;
        `};
`;
