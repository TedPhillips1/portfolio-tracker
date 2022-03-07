import styled from "styled-components";

export const MIFull = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 15px;
  border-bottom: 1px solid #1d1d1d;
`;

type Props = {
  profit: boolean;
};

export const MIPrice = styled.p<Props>`
  font-size: 20px;
  color: ${(props) => (props.profit ? `#9FCC2E` : `#FF7083`)};
`;
