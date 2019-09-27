import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import _uniq from 'lodash/uniq';

import { fetchGeneSaga } from '../redux/store';
import Root from '../components/Root';
import DragonCell from '../components/DragonCell';

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
  },
  dragons: {
    display: 'flex',
    justifyContent: 'center'
  },
  cell: {
    margin: '0 15px'
  }
}));

function jumpTo(query) {
  Router.push(`${process.env.BACKEND_URL}/?q=${query}&_r=${new Date().getTime()}`);
}

let Index = ({
  dispatchGeneFetch,
  pinnedDragons = [],
  genes = {},
  initDragon = '',
  web3,
  refetch
}) => {
  const classes = useStyles();
  const [dragonId, setDragonId] = useState(initDragon);

  useEffect(() => {
    if (web3 && initDragon) {
      dispatchGeneFetch(initDragon);
    }
  }, [refetch, web3]);

  const dragons = _uniq([...pinnedDragons, initDragon]);

  return (
    <Root>
      <Grid container className={classes.upper}>
        <Grid item xs={12} sm={12} md={6} lg={4} >
          <Paper className={classes.inputCont} elevation={1}>
            <InputBase className={classes.input} placeholder={'dragon id #'}
              value={dragonId}
              spellCheck={false}
              onChange={e => setDragonId(e.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  jumpTo(dragonId);
                }
              }}
              />
            <IconButton className={classes.iconButton} aria-label={'Search'} onClick={e => jumpTo(dragonId)}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.dragons}>
        {
          dragons.map(dragon => {
            const isPin = !!~pinnedDragons.indexOf(dragon);
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={dragon} className={classes.cell}>
                <DragonCell genes={genes} id={dragon}
                  isPin={isPin}
                  />
              </Grid>
            );
          })
        }
      </Grid>
    </Root>
  );
};

function parseQuery(query) {
  return parseInt(query, 10);
}

Index.getInitialProps = ({query = {}}) => {
  const {q, _r} = query;
  const initDragon = parseQuery(q);
  if (initDragon > 0) {
    return {initDragon, refetch: _r};
  }
  return {refetch: _r};
};

Index = connect(
  ({genes, web3, pinnedDragons}) => ({genes, web3, pinnedDragons}),
  (dispatch) => ({
    dispatchGeneFetch: bindActionCreators(fetchGeneSaga, dispatch)
  })
)(Index);

export default Index;
