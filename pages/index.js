import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Router, {useRouter} from 'next/router';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import _uniq from 'lodash/uniq';

import { fetchGeneSaga } from '../redux/store';
import Root from '../components/Root';
import DragonCell from '../components/DragonCell';
import {useEtherProvider} from 'use-ether-provider';

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

let Index = ({
  dispatchGeneFetch,
  pinnedDragons = [],
  genes = {}
}) => {
  const classes = useStyles();
  const provider = useEtherProvider();
  const [showDragonId, setShowDragonId] = useState(1);
  const [searchBoxId, setSearchBoxId] = useState(showDragonId);
  // console.log(`${_r}#${initDragon}`);
  useEffect(() => {
    if (provider && showDragonId) {
      dispatchGeneFetch(provider, showDragonId);
    }
  }, [provider, showDragonId]);

  const dragons = _uniq([...pinnedDragons, showDragonId]);

  return (
    <Root>
      <Grid container className={classes.upper}>
        <Grid item xs={12} sm={12} md={6} lg={4} >
          <Paper className={classes.inputCont} elevation={1}>
            <InputBase className={classes.input} placeholder={'dragon id #'}
              value={searchBoxId}
              spellCheck={false}
              onChange={e => setSearchBoxId(e.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  setShowDragonId(searchBoxId);
                }
              }}
              />
            <IconButton className={classes.iconButton} aria-label={'Search'} onClick={e => setShowDragonId(searchBoxId)}>
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

Index = connect(
  ({genes, pinnedDragons}) => ({genes, pinnedDragons}),
  (dispatch) => ({
    dispatchGeneFetch: bindActionCreators(fetchGeneSaga, dispatch)
  })
)(Index);

export default Index;
