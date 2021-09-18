import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";
import Description from "./components/Description";
import Header from "./components/Header";
import ReportsList from "./components/ReportsList";
import ReportView from "./components/ReportView";

const useStyles = makeStyles({
  root: {
    background: "#D7FBE8",
    height: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Description />
      <ReportView />
    </Box>
  );
}

export default App;
