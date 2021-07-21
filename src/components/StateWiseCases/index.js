import React from 'react';
import BarGraph from '../BarGraph';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StateList from '../StateList';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: '#282828',
    padding: theme.spacing(2)
  }
}));

const barProperties02 = { xAxis: 'name', barDataName: 'Cases', color: '#0033cc', height: 500 };

function StateWiseCases(props) {
  const classes = useStyles();
  const { graphData, states } = props;
  const [curState, setCurState] = React.useState('Total');

  const handleListSelect = (val) => {
    setCurState(val);
  }

  return (
    <div className={classes.root}>
      <Typography variant='h4' align="center" style={{ color: '#fff' }} gutterBottom>State Wise Cases</Typography>
      <Paper className={classes.paper}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <BarGraph data={graphData[curState]} name={barProperties02} />
            <Typography align='center' variant='h5' style={{ color: '#fff', padding:20 }}>{curState}</Typography>
            <Typography align='center' variant='h5' style={{ color: '#ff7e0d'}}>{`Confirmed Cases: ${graphData[curState]?.confirmed.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography align='center' variant='h5' style={{ color: '#fff' }} gutterBottom>States</Typography>
            <StateList data={states} handleListSelect={handleListSelect}/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default StateWiseCases
