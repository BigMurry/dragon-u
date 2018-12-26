import '../styles/bootstrap';

import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import { fetchGeneSaga } from '../redux/store';
import Root from '../components/Root';

const useStyles = makeStyles(theme => ({
  upper: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputCont: {
    display: 'flex'
  },
  input: {
    flex: 1,
    padding: '0 3px 0 10px'
  }
}));

let Index = ({dispatchGeneFetch, genes = {}}) => {
  const classes = useStyles();
  const [dragonId, setDragonId] = useState(1);
  return (
    <Root>
      <Grid container className={classes.upper}>
        <Grid item sm={12} md={6} lg={4} >
          <Paper className={classes.inputCont} elevation={1}>
            <InputBase className={classes.input} placeholder={'dragon id #'} value={dragonId} onChange={e => setDragonId(e.target.value)} />
            <IconButton className={classes.iconButton} aria-label={'Search'} onClick={e => dispatchGeneFetch(dragonId)}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.cont}>
        {genes.hasOwnProperty(dragonId) && (
          <div>{JSON.stringify(genes[dragonId])}</div>
        )}
      </div>
    </Root>
  );
};

Index = connect(
  ({genes}) => ({genes}),
  (dispatch) => ({
    dispatchGeneFetch: bindActionCreators(fetchGeneSaga, dispatch)
  })
)(Index);

export default Index;
