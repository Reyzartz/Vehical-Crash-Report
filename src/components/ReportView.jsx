import { AppBar, Container, Button, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReportsList from "./ReportsList";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#62D2A2",
    padding: "0rem 1.5rem",
    justifyContent: "flex-end",
  },
  datePicker: {
    maxWidth: "10rem",
  },
});

const ReportView = () => {
  const classes = useStyles();
  const [date, setDate] = useState(dayjs("2014"));
  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="sticky">
        <Toolbar className={classes.main}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              value={date}
              minDate={dayjs("2014")}
              maxDate={dayjs()}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  className={classes.datePicker}
                  label="Standard"
                  variant="standard"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Toolbar>
      </AppBar>

      <ReportsList date={date} />
    </Container>
  );
};

export default ReportView;
