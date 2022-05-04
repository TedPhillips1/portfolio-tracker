import { TableCell } from "./table-cell-styled";

type Props = {
  text: string;
  toggleColor: boolean;
};

function TableCellComponent({ text, toggleColor }: Props) {
  return <TableCell toggleColor={toggleColor}>{text}</TableCell>;
}

export default TableCellComponent;
