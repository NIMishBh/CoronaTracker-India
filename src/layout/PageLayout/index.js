import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#121212',
    //backgroundImage:'linear-gradient(315deg, #121212 0%, #414141 74%)',
    padding: theme.spacing(2),
    minHeight: '100vh',
  },
}));

function PageLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

export default PageLayout