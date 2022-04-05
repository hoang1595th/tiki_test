import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { CellBox } from './CellBox';
import CustomTableCell from './CustomTableCell';

import {
  Box,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper
} from '@mui/material';

import {
  appForm,
  generateButton,
  mainContent,
  tableContainer,
  table,
} from './styledApp';

export const AppContext = React.createContext();

function App() {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);
  console.log('list', list)
  const numberArr = [...Array(parseInt(number)).keys()];

  useEffect(() => {
    if (number > 0) {
      setList(generateList());
    }
  }, [number]);

  const generateList = () => {
    return [...Array(parseInt(number * number)).keys()].map(n => n + 1);
  }

  const onKeyDown = (e) => {
    const keyCode = e.keyCode;
    
    if((keyCode < 48 || keyCode > 57) && keyCode !== 8){
      e.preventDefault();
    }
  }

  const getListIndex = (x, y) => {
    if (x % 2 === 0) {
      return x * number + y
    } else {
      return (x + 1) * number - (y + 1)
    }
  }

  const updateListData = (dragIndex, dropIndex) => {
    if (list[dragIndex] && list[dropIndex]) {
      let tempList = [...list];
      [tempList[dragIndex], tempList[dropIndex]] = [tempList[dropIndex], tempList[dragIndex]];

      setList(tempList);
    }
  }

  return (
    <AppContext.Provider value={{ list, updateListData, getListIndex }}>
      <Paper elevation={3} sx={appForm}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          label="Enter number"
          variant="standard"
        />
        <Button onClick={() => setNumber(input)} sx={generateButton} variant="contained">Generate</Button>
      </Paper>
      <Box component="div" sx={mainContent}>
        {/* table */}
        {number > 0 && <TableContainer sx={tableContainer}>
          <Table aria-label="simple table" sx={table} >
            <TableBody>
              <DndProvider backend={HTML5Backend}>
                {numberArr.map((row, rowIndex) => (
                  <TableRow key={rowIndex} >
                    {numberArr.map((col, colIndex) => {
                      const listIndex = getListIndex(col, row);
                      return listIndex && (
                        <CustomTableCell key={colIndex} listIndex={listIndex} >
                          <CellBox listIndex={listIndex} data={list[listIndex] || ""} />
                        </CustomTableCell>
                      )
                    })}
                  </TableRow>
                ))}
              </DndProvider>
            </TableBody>
          </Table>
        </TableContainer>}
      </Box>
    </AppContext.Provider>
  );
}

export default App;
