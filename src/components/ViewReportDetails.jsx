import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {},
});

const ViewReportDetails = ({ onClose, open }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        onClose={onClose}
      ></SwipeableDrawer>
    </Box>
  );
};
export default ViewReportDetails;
