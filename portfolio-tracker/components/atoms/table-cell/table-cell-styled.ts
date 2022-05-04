import styled from "styled-components";

type Props = {
  toggleColor: boolean;
};

export const TableCell = styled.div<Props>`
  width: 16.6%;
  background-color: ${(props) => (props.toggleColor ? "#3d3d3d" : "#2e2e2e")};
  border-top: 1px solid #afafaf;
  padding: 10px;
  text-align: center;
  font-size: 1.25em;
`;
