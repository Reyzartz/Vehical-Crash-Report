import { Container, Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    padding: "3rem",
  },
  label: {
    color: "#777",
    fontWeight: "600",
  },
  aboutFeild: {
    borderLeft: "2px solid #1FAB89",
    padding: "0 0.75rem",
    margin: "1rem 0",
  },
});

const Description = ({ date }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={5}>
        <Grid item sm="9" xs="12">
          <Typography variant="h5" gutterBottom>
            Description
          </Typography>
          <Typography paragraph variant="subtitle2">
            The Motor Vehicle Collisions crash table contains details on the
            crash event. Each row represents a crash event. The Motor Vehicle
            Collisions data tables contain information from all police reported
            motor vehicle collisions in NYC. The police report (MV104-AN) is
            required to be filled out for collisions where someone is injured or
            killed, or where there is at least $1000 worth of damage . It should
            be noted that the data is preliminary and subject to change when the
            MV-104AN forms are amended based on revised crash details.For the
            most accurate, up to date statistics on traffic fatalities, please
            refer to the NYPD Motor Vehicle Collisions page (updated weekly) or
            Vision Zero View (updated monthly).
          </Typography>
        </Grid>
        <Grid item sm="3" xs="12">
          <Typography variant="h5" gutterBottom>
            About
          </Typography>
          <Box className={classes.aboutFeild}>
            <Typography className={classes.label}>Updated</Typography>
            <Typography>{new Date().toLocaleDateString()}</Typography>
          </Box>
          <Box className={classes.aboutFeild}>
            <Typography className={classes.label}>Data Provided by</Typography>
            <Typography>Police Department (NYPD)</Typography>
          </Box>
          <Box className={classes.aboutFeild}>
            <Typography className={classes.label}>Dataset Owner</Typography>
            <Typography>NYC OpenData</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
