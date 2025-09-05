import {
  TableContainer, //Contenedor para otorgar scrolling horizontal
  Table, // Contenedor de la tabla. renderiza un table
  TableHead, //
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import { users } from "../../fixtures/data";
import { useState } from "react";
import { grey } from "@mui/material/colors";

export const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  return (
    <>
      <TableContainer
        sx={{
          maxHeight: 400,
        }}
      >
        <Table
          stickyHeader // Fijar el header de la tabla. La altura de la tabla debe ser fijada
          //   size="small" // Para compactar
        >
          <TableHead
            sx={{
              // Estilos cada celda del header
              "& .MuiTableCell-root": {
                bgcolor: "black",
                borderColor: "lightgray",
                color: "white",
                fontFamily: "cursive",
                // fontSize: 15,
                fontWeight: "bold",
              },
            }}
          >
            <TableRow sx={{}}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              // Estilos filas
              "& .MuiTableRow-root": {
                // bgcolor: grey[900],
                "&:hover": {
                  bgcolor: grey[600],
                  //   fontWeight: "bold",
                },
              },
              // Estilos celdas filas
              "& .MuiTableCell-root": {
                color: "white",
                fontFamily: "verdana",
                borderColor: grey[500],
                py: 2,
                px: 2,
              },
            }}
          >
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, i) => (
                <TableRow
                  key={user.id}
                  sx={{ bgcolor: i % 2 === 0 ? grey[900] : grey[800] }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.city}</TableCell>
                  <TableCell>{user.isActive ? "Active" : "Inactive"}</TableCell>
                </TableRow>
              ))}
            <TableRow
              sx={{
                "&.MuiTableRow-root": {
                  bgcolor: "black",
                },
              }}
            >
              <TableCell colSpan={3} />
              <TableCell>Active users</TableCell>
              <TableCell>
                {
                  users.reduce(
                    (total, user) => (user.isActive ? total + 1 : total),
                    0
                  )
                  //   .toFixed(2)
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component={"div"}
        rowsPerPageOptions={[3, 5, 10]}
        count={users.length} // Num total de elementos
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(evemt, newPage) => setPage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          //Estilos paginación
          bgcolor: grey[900],
          color: "white",
          fontFamily: "fantasy",
          "& .MuiTablePagination-selectLabel": {
            color: "whitesmoke",
            fontFamily: "cursive",
            fontWeight: "bold",
          },
          "& .MuiTablePagination-displayedRows": { color: "salmon" },
          "& .MuiInputBase-input": { bgcolor: grey[800] },
          "& .MuiSelect-icon": {
            fill: "salmon",
          },
        }}
        slotProps={{
          actions: {
            previousButton: {
              sx: {
                "& > svg": {
                  fill: "goldenrod",
                  fontSize: 30,
                },
                "&.Mui-disabled": {
                  "& .MuiSvgIcon-root": {
                    fill: "grey",
                  },
                },
              },
            },
            nextButton: {
              sx: {
                "& > svg": {
                  fill: "goldenrod",
                  fontSize: 30,
                },
                "&.Mui-disabled": {
                  "& .MuiSvgIcon-root": {
                    fill: "grey",
                  },
                },
              },
            },
          },
          menuItem: {
            sx: {
              bgcolor: grey[900],
              color: "white",
              "&.MuiTablePagination-menuItem.Mui-selected": {
                bgcolor: grey[800],
                "&:hover": {
                  bgcolor: grey[600],
                  color: "black",
                },
              },
              "&:hover": {
                bgcolor: grey[600],
                color: "black",
              },
            },
          },
          //   selectLabel: { sx: {} },
        }}
      />
    </>
  );
};
{
  /* <TableRow>
  <TableCell align="center" colSpan={5}>
    Users
  </TableCell>
</TableRow> */
}
