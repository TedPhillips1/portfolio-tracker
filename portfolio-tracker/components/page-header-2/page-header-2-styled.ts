import styled, { css, keyframes } from "styled-components";

type Props = {
  toggleAnimation: boolean;
};

const fadeAcross = keyframes`
0% {
  opacity: 0;
  transform: translateX(-30px)
}
100% {
  opacity: 1;
  transform: translateX(0px)
}
`;

export const PageHeader2 = styled.h2`
  font-size: 36px;
  min-width: 250px;
  ${(props: Props) => (props.toggle ? "color: white;" : "opacity: 0;")}
  animation: ${(props: Props) =>
    props.toggle
      ? css`
          ${fadeAcross} 1.5s 1
        `
      : css`none;`}
`;
