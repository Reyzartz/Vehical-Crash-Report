import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ViewReportDetails from "./ViewReportDetails";

const useStyles = makeStyles({
  tableContainer: {
    maxHeight: "90vh",
  },
  tableHeader: {
    fontWeight: "600 !important",
  },
});

const ReportsList = ({ date }) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [viewDetails, setViewDetails] = useState(false);

  const fetchReportsList = () => {
    const formatedDate = date.format("YYYY-MM-DDT00:00:00.000");
    console.log(formatedDate, "2014-01-21T00:00:00.000");
    fetch(
      `https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=${formatedDate}&$offset=${page}&$limit=${rowsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRows(formatDataToTableRows(data));
      });
  };

  const formatDataToTableRows = (data) => {
    return data.map((row) => ({
      id: row.collision_id,
      vehicleCode1: row.vehicle_type_code1,
      vehicleCode2: row.vehicle_type_code2,
      crashDate: new Date(row.crash_date).toLocaleDateString(),
      crashTime: row.crash_time,
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    fetchReportsList();
  }, [page, rowsPerPage, date]);
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.tableHeader}>
                Vehicle Type Code1
              </TableCell>
              <TableCell className={classes.tableHeader}>
                Vehicle Type Code2
              </TableCell>
              <TableCell className={classes.tableHeader} align="right">
                Crash Date
              </TableCell>
              <TableCell className={classes.tableHeader} align="right">
                Crash Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.vehicleCode1}</TableCell>
                <TableCell>{row.vehicleCode2}</TableCell>
                <TableCell align="right">{row.crashDate}</TableCell>
                <TableCell align="right">{row.crashTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={1000}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ViewReportDetails
        onClose={() => {
          setViewDetails(false);
        }}
        open={viewDetails}
      />
    </>
  );
};

export default ReportsList;
