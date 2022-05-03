import styled from "styled-components";

type Props = {
  toggle: boolean;
};

export const BSButton = styled.button<Props>`
  margin: 1vw;
  border: none;
  background-color: ${(props) => (props.toggle ? "#9FCC2E" : "#FF7083")};
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 0;
  margin-bottom: 0;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:active {
    opacity: 0.3;
    cursor: pointer;
  }
`;
