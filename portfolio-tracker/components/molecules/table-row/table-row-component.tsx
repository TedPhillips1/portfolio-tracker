import TableCellComponent from "../../atoms/table-cell/table-cell-component";
import { TableRow } from "./table-row-styled";

type Props = {
  C1: string;
  C2: string;
  C3: string;
  C4: string;
  C5: string;
  C6: string;
  toggleColor: boolean;
};

function TableRowComponent({ C1, C2, C3, C4, C5, C6, toggleColor }: Props) {
  return (
    <TableRow>
      <TableCellComponent text={C1} toggleColor={toggleColor} />
      <TableCellComponent text={C2} toggleColor={toggleColor} />
      <TableCellComponent text={C3} toggleColor={toggleColor} />
      <TableCellComponent text={C4} toggleColor={toggleColor} />
      <TableCellComponent text={C5} toggleColor={toggleColor} />
      <TableCellComponent text={C6} toggleColor={toggleColor} />
    </TableRow>
  );
}

export default TableRowComponent;
