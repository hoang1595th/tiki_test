import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import Box from '@mui/material/Box';

import { AppContext } from './App';

const style = {
  border: '1px dashed gray',
  backgroundColor: '#b3e5fc',
  padding: '0.5rem',
  cursor: 'move',
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: '#29b6f6',
    color: "#ffffff"
  }
};

export const BoxTypes = 'box';

const CellBox = React.memo(({ listIndex }) => {
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
  const opacity = isDragging ? 0.4 : 1;

  return (
    <Box component="div" ref={drag} role="Box" sx={{ ...style, opacity }}>
      {list[listIndex] || ""}
    </Box>
  );
});

export default CellBox;
