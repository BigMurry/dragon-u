import '../styles/bootstrap';

import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { fetchGeneSaga } from '../redux/store';
import Root from '../components/Root';
import _get from 'lodash/get';
import _chunk from 'lodash/chunk';

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
  cont: {
    marginTop: '30px'
  },
  dragons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dragon: {
    padding: '10px'
  },
  part: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    flexBasis: '60px'
  },
  codes: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  cell: {
    padding: '4px',
    margin: '2px 2px',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(220, 220, 220, 0.2)'
  },
  gene: {
    fontSize: '0.7em',
    marginRight: '2px'
  },
  level: {
    fontSize: '0.2em'
  },
  domi: {
    fontWeight: '600'
  },
  rare: {
    color: 'purple'
  },
  epic: {
    color: 'orange'
  },
  active: {
    backgroundColor: 'rgba(220, 200, 200, 0.8)'
  }
}));

function dominantSlot(genes = []) {
  const [gene0, gene1] = genes;
  if (gene1.isDominant && !gene0.isDominant) {
    return 1;
  }
  return 0;
}

let Index = ({dispatchGeneFetch, genes = {}}) => {
  const classes = useStyles();
  const [dragonId, setDragonId] = useState();
  const codes = _chunk(_get(genes, [dragonId, 'allCodes'], []), 4);
  return (
    <Root>
      <Grid container className={classes.upper}>
        <Grid item sm={12} md={6} lg={4} >
          <Paper className={classes.inputCont} elevation={1}>
            <InputBase className={classes.input} placeholder={'dragon id #'}
              value={dragonId}
              spellCheck={false}
              onChange={e => setDragonId(e.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  dispatchGeneFetch(dragonId);
                }
              }}
              />
            <IconButton className={classes.iconButton} aria-label={'Search'} onClick={e => dispatchGeneFetch(dragonId)}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.cont}>
        <Grid container className={classes.dragons}>
          <Grid item xs={12} sm={6} md={4}>
            {
              codes.length > 0 &&
              <Paper className={classes.dragon}>
                {
                codes.map((c, idx) => {
                  const activeSlot = dominantSlot(c);
                  return (
                    <div className={classes.part} key={idx}>
                      <Typography className={classes.label}>{c[0].bodyPart}</Typography>
                      <div className={classes.codes}>
                        {
                          c.map((item, slot) => {
                            return (
                              <div key={`${idx}-${slot}`} className={cn(classes.cell, {[classes.active]: activeSlot === slot})}>
                                <Typography className={cn(
                                  classes.gene,
                                  {
                                    [classes.domi]: item.isDominant,
                                    [classes.rare]: item.geneVariatyIdx >= 5,
                                    [classes.epic]: item.geneVariatyIdx >= 8
                                  })}>{item.geneVariaty}</Typography>
                                <Typography className={cn(
                                  classes.level,
                                  {
                                    [classes.domi]: item.isDominant,
                                    [classes.rare]: item.geneVariatyIdx >= 5,
                                    [classes.epic]: item.geneVariatyIdx >= 8
                                  })}>{item.geneLevel}</Typography>
                              </div>
                            );
                          })
                        }
                      </div>
                    </div>
                  );
                })
                }
              </Paper>
            }
          </Grid>
        </Grid>
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
