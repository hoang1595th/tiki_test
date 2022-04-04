import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { AppContext } from './App';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

export const BoxTypes = 'box';

export const CellBox = function CellBox({ listIndex, data }) {
  const { updateListData } = useContext(AppContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: BoxTypes,
    item: { listIndex },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        updateListData(item.listIndex, dropResult.listIndex)
      }
    }
  }), [listIndex, data]);
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} role="Box" style={{ ...style, opacity }}>
      {data}
    </div>
  );
};
