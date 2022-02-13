import styled from "styled-components";

export const AuthButton = styled.button`
  margin: 0.5vw;
  margin-right: 20px;
  border: none;
  background-color: #6ebee1;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #4a7d94;
    cursor: pointer;
  }

  &:active {
    background-color: #2e4e5c;
    cursor: pointer;
  }
`;
