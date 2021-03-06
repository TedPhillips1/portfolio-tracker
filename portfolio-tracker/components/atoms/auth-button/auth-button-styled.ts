import styled from "styled-components";

export const AuthButton = styled.button`
  margin: 0.5vw;
  border: none;
  background-color: #5b98b5;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 0;

  &:hover {
    background-color: #4a7d94;
    cursor: pointer;
  }

  &:active {
    background-color: #2e4e5c;
    cursor: pointer;
  }
`;
