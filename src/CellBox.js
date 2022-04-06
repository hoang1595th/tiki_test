import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import Box from '@mui/material/Box';

import { AppContext } from './App';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  cursor: 'move',
  fontWeight: "bold",
  minWidth: "25px",
  '&:hover': {
    backgroundColor: '#039be5',
    color: "#ffffff"
  }
};

export const BoxTypes = 'box';

const CellBox = React.memo(({ listIndex, isOver }) => {
  const { list, updateListData } = useContext(AppContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: BoxTypes,
    item: { listIndex },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        updateListData(item.listIndex, dropResult.listIndex)
      }
    }
  }), [list]);

  const dynamicStyle = {
    opacity: (isDragging ? 0.4 : 1),
    backgroundColor: isOver ? '#ffa726' : '#b3e5fc',
  }

  return (
    <Box component="div" ref={drag} role="Box" sx={{ ...style, ...dynamicStyle }}>
      {list[listIndex] || ""}
    </Box>
  );
});

export default CellBox;
