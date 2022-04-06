import { blue, lightBlue, grey } from '@mui/material/colors';

const SIDE_BAR_WIDTH = 250;

export const appContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
};

export const sideBar = {
  display: "flex",
  flexDirection: "column",
  width: `${SIDE_BAR_WIDTH}px`,
  padding: "0 16px",
  backgroundColor: lightBlue[200],
  height: "100%",
  boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  zIndex: "1"
};

export const title = {
  fontSize: "27px",
  fontWeight: "bold",
  borderBottom: "1px solid #000000",
  textAlign: "center",
  color: blue[900],
  padding: "10px 0",
  marginBottom: "10px"
};

export const description = {
  color: grey[700],
  marginBottom: "30px"
};

export const generateButton = {
  marginTop: "8px"
};

export const mainContent = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e1f5fe",
  height: "100%",
  padding: "40px",
  width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
  boxSizing: "border-box",
  overflow: "auto"
};

export const tableContainer = {
  maxHeight: "100%",
  width: "auto",
  border: "2px solid "+ grey[600],
  padding: "10px",
  backgroundColor: "#ffffff",
  boxSizing: "border-box"
};

export const table = {
  width: "auto",
  margin: "0 auto",
  borderCollapse: "collapse"
};

export const tableBody = {
  backgroundColor: "#607d8b",
  overflow: "auto",
  boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
};
