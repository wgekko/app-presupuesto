import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataEnero } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Enero = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", 
      headerName: "Item",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
  
    },
    { field: "proyecto",
     headerName: "PROYECTO",
     headerAlign: "center",
     align: "center",
    },
    {
      field: "name",
      headerName: "DETALLE DE GASTO",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "importe",
      headerName: "IMPORTE",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fecha",
      headerName: "fecha de fondos",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },  
    {
      field: "comentarios",
      headerName: "Comentarios",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },  
  ];

  return (
    <Box m="20px">
      <Header
        title="ENERO 2024"
        subtitle="Lista de vencimientos de gastos "
       
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataEnero}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Enero;
