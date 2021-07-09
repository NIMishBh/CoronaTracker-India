import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  svmContainer: {
    padding: theme.spacing(2),
    backgroundColor: '#282828',
    minHeight: 50,
    '&:hover': {
      boxShadow: '0px 0px 10px 10px #404040',
  }
}
}));

function SingleValueMetric(props) {
  const classes = useStyles();
  const { title, value, ...rest } = props;
  return (
    <Card className={classes.svmContainer} elevation={5}>
      <Typography variant='h4' align='center' {...rest}>{title}</Typography>
      {value && <Typography variant='h5' align='center' style={{color:'#fff'}}>{value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>}
    </Card>
  )
}

export default SingleValueMetric
