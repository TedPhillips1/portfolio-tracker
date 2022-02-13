import styled from "styled-components";

export const ClearButton = styled.button`
  margin: 0.5vw;
  background-color: #3d3d3d;
  border: none;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #1d1d1d;
    cursor: pointer;
  }

  &:active {
    background-color: #000;
    cursor: pointer;
  }
`;
