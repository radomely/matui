import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const style = { Paper: { padding: 20, marginTop: 10, marginBottom: 10 } };

const Exercises = () => (
  <Grid container spacing={2}>
    <Grid item sm>
      <Paper style={style.Paper}>Left pane</Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>Right pane</Paper>
    </Grid>
  </Grid>
);
export default Exercises;
