import { Typography, Box, Container, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "#62D2A2",
    color: "#333",
    padding: "0.75rem 0",
    fontWeight: "800",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4">Motor Vehicle Collisions Report</Typography>
      </Container>
    </Box>
  );
};

export default Header;
