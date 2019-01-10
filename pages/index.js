import '../styles/bootstrap';

import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import Router from 'next/router';
import Link from 'next/link';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CoolnessIcon from 'mdi-material-ui/StarCircle';
import StrengthIcon from 'mdi-material-ui/Mushroom';
import HealthIcon from 'mdi-material-ui/HeartMultiple';
import ManaIcon from 'mdi-material-ui/WeatherHurricane';
import LinkIcon from 'mdi-material-ui/LinkVariant';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

import { fetchGeneSaga } from '../redux/store';
import Root from '../components/Root';
import _get from 'lodash/get';
import _chunk from 'lodash/chunk';
import {getCoolnessScore, getSkills, getDS} from 'dragon-g';
import {getContractInstance} from '../artifacts';

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
  info: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: 'rgba(247, 51, 120, 0.05)'
  },
  head: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    marginRight: '10px',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  linkIcon: {
    fontSize: '0.8em'
  },
  score: {
    margin: '20px 0'
  },
  chip: {
    margin: '0 5px 4px 0'
  },
  skills: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  skLabel: {
    color: 'rgba(150, 150, 150, 0.8)'
  },
  dragon: {
  },
  genes: {
    padding: '10px'
  },
  part: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    flexBasis: '40px',
    fontSize: '0.8em'
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
    fontSize: '0.6em',
    marginRight: '5px'
  },
  level: {
    fontSize: '0.7em'
  },
  domi: {
    fontWeight: '600'
  },
  inbreed: {
    color: 'rgba(100, 100, 100, 0.7)'
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

function jumpTo(query) {
  Router.push(`/?q=${query}&_r=${new Date().getTime()}`);
}

const SKILL_NAME = ['Attack', 'Defense', 'Stamina', 'Speed', 'Intelligence'];

async function fetchHealthAndMana(web3, id) {
  let res = {};
  if (web3 && id) {
    const getterContract = getContractInstance(web3, 'Getter');
    res = await getterContract.methods.getDragonCurrentHealthAndMana(id).call();
  }
  return res;
}
let Index = ({dispatchGeneFetch, genes = {}, initDragon = '', web3, refetch}) => {
  const classes = useStyles();
  const [dragonId, setDragonId] = useState(initDragon);
  const [health, setHealth] = useState('...');
  const [mana, setMana] = useState('...');

  function handleFetchHealthAndMana(e) {
    fetchHealthAndMana(web3, initDragon)
    .then(({health, mana, healthPercentage, manaPercentage}) => {
      setHealth(`${health / 100}(${healthPercentage}%)`);
      setMana(`${mana / 100}(${manaPercentage}%)`);
    });
  }

  useEffect(() => {
    if (web3 && initDragon) {
      dispatchGeneFetch(initDragon);
      handleFetchHealthAndMana();
    }
  }, [refetch, web3]);

  const codes = _chunk(_get(genes, [initDragon, 'allCodes'], []), 4);
  const parsed = _get(genes, initDragon);
  let coolnessScore;
  let skills;
  let ds;
  if (parsed) {
    coolnessScore = getCoolnessScore(parsed);
    skills = getSkills(parsed.dominants);
    ds = getDS(skills);
  }
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
      <div className={classes.cont}>
        <Grid container className={classes.dragons}>
          <Grid item xs={12} sm={6} md={4}>
            {
              codes.length > 0 &&
              <Paper className={classes.dragon}>
                <div className={classes.info}>
                  <div className={classes.head}>
                    <Link href={`https://dapp.dragonereum.io/marketplace/dragons/${initDragon}`}>
                      <a className={classes.link} target={'_blank'} title={'dapp.dragonereum.io'}>
                        <Typography variant={'h6'}>{`#${initDragon}`}</Typography>
                      </a>
                    </Link>
                    <LinkIcon className={classes.linkIcon} />
                  </div>
                  <div className={classes.score}>
                    <Tooltip title={'Coolness score'}>
                      <Chip
                        icon={<CoolnessIcon />}
                        label={coolnessScore / 100}
                        className={classes.chip}
                        color='secondary'
                        variant='outlined'
                        />
                    </Tooltip>
                    <Tooltip title={'Strength score'}>
                      <Chip
                        icon={<StrengthIcon />}
                        label={ds}
                        className={classes.chip}
                        color='secondary'
                        variant='outlined'
                        />
                    </Tooltip>
                    <Tooltip title={'Health'}>
                      <Chip
                        icon={<HealthIcon />}
                        label={health}
                        className={classes.chip}
                        onClick={handleFetchHealthAndMana}
                        color='secondary'
                        variant='outlined'
                        />
                    </Tooltip>
                    <Tooltip title={'Mana'}>
                      <Chip
                        icon={<ManaIcon />}
                        label={mana}
                        className={classes.chip}
                        onClick={handleFetchHealthAndMana}
                        color='secondary'
                        variant='outlined'
                        />
                    </Tooltip>
                  </div>
                  <div className={classes.skills}>
                    {
                      skills.map((sk, idx) => {
                        return (
                          <div className={classes.skill} key={idx}>
                            <Typography className={classes.skLabel} variant={'caption'}>{SKILL_NAME[idx]}</Typography>
                            <Typography className={classes.skValue}>{sk / 100}</Typography>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className={classes.genes}>
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
                                      [classes.inbreed]: item.geneVariatyIdx === 0,
                                      [classes.rare]: item.geneVariatyIdx >= 5,
                                      [classes.epic]: item.geneVariatyIdx >= 8
                                    })}>{item.geneVariaty}</Typography>
                                  <Typography className={cn(
                                    classes.level,
                                    {
                                      [classes.domi]: item.isDominant,
                                      [classes.inbreed]: item.geneVariatyIdx === 0,
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
                </div>
              </Paper>
            }
          </Grid>
        </Grid>
      </div>
    </Root>
  );
};

function parseQuery(query) {
  return parseInt(query, 10);
}

Index.getInitialProps = async ({query = {}}) => {
  const {q, _r} = query;
  const initDragon = parseQuery(q);
  if (initDragon > 0) {
    return {initDragon, refetch: _r};
  }
  return {refetch: _r};
};

Index = connect(
  ({genes, web3}) => ({genes, web3}),
  (dispatch) => ({
    dispatchGeneFetch: bindActionCreators(fetchGeneSaga, dispatch)
  })
)(Index);

export default Index;
