import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: '1px solid #fff',
    borderRadius: 6,
    color:'#fff',
    height: '500px',
    overflowY: 'scroll',
  },
}));

function StateList(props) {
  const { data, handleListSelect } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {
          data.map((item,i) => {
            return (
              <ListItem button key={i} onClick = {() => handleListSelect(item)}>
                <ListItemText primary={item} />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}

export default StateList
