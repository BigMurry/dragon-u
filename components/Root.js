import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 10px'
  }
}));

let Root = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>{children}</div>
  );
};

export default Root;
