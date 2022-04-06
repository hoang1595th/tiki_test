import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { grey } from '@mui/material/colors';
import TableCell from '@mui/material/TableCell';

import CellBox, { BoxTypes } from './CellBox';
import { AppContext } from './App';

const style = {
	border: "1px solid #ffffff",
	textAlign: "center",
	padding: "3px"
};

const CustomTableCell = React.memo(({ row, col }) => {
  const { getListIndex } = useContext(AppContext);
	const listIndex = getListIndex(col, row);

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: BoxTypes,
		drop: () => ({ listIndex }),
	}));

	return (
		<TableCell align="center" sx={style} ref={drop} >
			<CellBox listIndex={listIndex} />
		</TableCell>
	);
});

export default CustomTableCell;
