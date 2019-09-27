import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Router from 'next/router';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

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
  const url = `${process.env.BACKEND_URL}/dragon/[id]`;
  const as = `${process.env.BACKEND_URL}/dragon/${query}`;
  Router.push(url, as, {shallow: true});
}

let Index = () => {
  const classes = useStyles();
  const [dragonId, setDragonId] = useState('');

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
    </Root>
  );
};

export default Index;
