import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography, Box, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    padding: "2rem",
  },
  label: {
    border: "1px solid #9DF3C4",
    textTransform: "uppercase",
    "&:nth-child(even)": {
      background: "#D7FBE8",
    },
  },
});

const ViewReportDetails = ({ onClose, open, row }) => {
  const classes = useStyle();
  return (
    <SwipeableDrawer anchor={"bottom"} open={open} onClose={onClose}>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container direction="row" spacing={1} justifyContent="center">
          {Object.entries(row).map(([label, value]) => (
            <Grid item xs={4} className={classes.label}>
              <Typography variant="subtitle2" align="center" gutterBottom>
                {label.replaceAll("_", " ")}
              </Typography>
              <Typography align="center">
                {typeof value === "string" ? value : " "}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SwipeableDrawer>
  );
};
export default ViewReportDetails;
