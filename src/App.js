import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import CellBox from './CellBox';
import CustomTableCell from './CustomTableCell';

import {
  Box,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow
} from '@mui/material';

import {
  appContainer,
  sideBar,
  title,
  description,
  textField,
  generateButton,
  mainContent,
  tableContainer,
  table,
  tableBody,
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
    return [...Array(Math.pow(number, 2)).keys()].map(n => n + 1);
  }

  const onKeyDown = (e) => {
    const keyCode = e.keyCode;

    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
      e.preventDefault();
    }
  }

  const getListIndex = useCallback((x, y) => {
    if (x % 2 === 0) {
      return x * number + y
    } else {
      return (x + 1) * number - (y + 1)
    }
  }, [number])

  const updateListData = (dragIndex, dropIndex) => {
    if (list[dragIndex] && list[dropIndex]) {
      let tempList = [...list];
      [tempList[dragIndex], tempList[dropIndex]] = [tempList[dropIndex], tempList[dragIndex]];

      setList(tempList);
    }
  }

  return (
    <AppContext.Provider value={{ list, updateListData, getListIndex }}>
      <Box component="div" sx={appContainer}>
        <Box component="aside" sx={sideBar}>
          <Box component="div" sx={title}>Zigzag Application</Box>
          <Box component="div" sx={description}>Enter a number to generate a zigzag table.</Box>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            label="number"
            variant="standard"
            sx={textField}
          />
          <Button onClick={() => setNumber(input)} disabled={!(parseInt(input) > 0)} sx={generateButton} variant="contained">Generate</Button>
        </Box>
        <Box component="main" sx={mainContent}>
          {/* table */}
          {number > 0 && list.length > 0 && (
            <TableContainer sx={tableContainer}>
              <Table aria-label="simple table" sx={table} >
                <TableBody sx={tableBody}>
                  {numberArr.map((row, rowIndex) => (
                    <TableRow key={rowIndex} >
                      {numberArr.map((col, colIndex) => (
                        <CustomTableCell key={colIndex} row={row} col={col} />
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Box>
    </AppContext.Provider >
  );
}

export default App;
