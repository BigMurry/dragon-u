import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { SnackbarProvider, withSnackbar } from 'notistack';

import { clearErrorStore } from '../redux/store';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 10px'
  },
  dialogWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px'
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
  }
}));

let Msg = ({enqueueSnackbar, error, clearError}) => {
  if (error) {
    enqueueSnackbar(error.msg, {variant: error.variant, onClose: () => clearError(error.id)});
  }
  return <React.Fragment />;
};

Msg = withSnackbar(Msg);
Msg = connect(
  ({error}) => ({error}),
  (dispatch) => ({clearError: bindActionCreators(clearErrorStore, dispatch)})
)(Msg);

let Root = ({children, web3}) => {
  const classes = useStyles();
  if (!web3) {
    return (
      <div className={classes.dialogWrapper}>
        <Paper className={classes.dialog}>
          <Typography>Waiting for web3 connecting...</Typography>
          <CircularProgress />
        </Paper>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      {children}
      <Msg />
    </div>
  );
};

Root = connect(
  ({web3}) => ({web3})
)(Root);

let RootWrapper = (props) => {
  return (
    <SnackbarProvider maxSnack={4}>
      <Root {...props} />
    </SnackbarProvider>
  );
};

export default RootWrapper;
