import { useDrop } from 'react-dnd';
import { BoxTypes } from './CellBox';
import { grey } from '@mui/material/colors';
import TableCell from '@mui/material/TableCell';

const style = {
	border: "1px solid " + grey[300],
	textAlign: "center"
};

const CustomTableCell = ({ listIndex, children }) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: BoxTypes,
		drop: () => ({ listIndex: listIndex }),
	}));

	return (
		<TableCell align="center" sx={style} ref={drop} >
			{children}
		</TableCell>
	);
};

export default CustomTableCell;
