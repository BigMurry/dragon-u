import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { SnackbarProvider, withSnackbar } from 'notistack';
import Chip from '@material-ui/core/Chip';
import TipIcon from 'mdi-material-ui/HeartCircle';
import GithubIcon from 'mdi-material-ui/GithubCircle';
import Dialog from '@material-ui/core/Dialog';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react';
import HeartIcon from 'mdi-material-ui/Heart';

import { clearErrorStore, setErrorStore } from '../redux/store';

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
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 0 20px 0'
  },
  by: {
    fontSize: '0.7em'
  },
  icons: {
    display: 'flex'
  },
  chip: {
    margin: '10px'
  },
  donate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px 20px 20px'
  },
  donateTitle: {
    display: 'flex',
    padding: '20px 10px',
    alignItems: 'center'
  },
  titleMsg: {
    color: 'rgba(90, 90, 90, 0.8)'
  },
  donateIcon: {
    marginRight: '2px',
    color: '#f50057'
  },
  addressWrapper: {
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  address: {
    fontSize: '0.5em',
    color: 'rgba(90, 90, 90, 0.4)',
    padding: '2px',
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
      cursor: 'pointer'
    }
  },
  notify: {
    color: '#f50057',
    fontSize: '0.5em'
  }
}));

const DONATOR_ACCOUNT = '0xCC6a7D642B66aFeed091B87b9175c61F8993cb3b';
function sendEther(web3, account, cb) {
  if (web3 && web3.eth && account) {
    web3.eth.sendTransaction({
      from: account,
      to: DONATOR_ACCOUNT,
      value: '6000000000000000' // 0.006 ether
    }, cb);
  }
}

function short(str = '', len) {
  return str.substring(0, len) + '...';
}

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

let Root = ({children, web3, account, setError}) => {
  const classes = useStyles();
  const [qrcode, showQrcode] = useState(false);
  const [thankDialog, showThankDialog] = useState(false);
  const [copied, setCopied] = useState(false);

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
  const isLogin = web3 && account;
  return (
    <div className={classes.container}>
      {children}
      <Msg />
      <div className={classes.footer}>
        <Typography className={classes.by}>{`diaomouren@gmail.com`}</Typography>
        <div className={classes.icons}>
          <Chip
            icon={<TipIcon />}
            label={isLogin ? '0.006 ETH' : short(DONATOR_ACCOUNT, 7)}
            className={classes.chip}
            onClick={e => {
              if (isLogin) {
                sendEther(web3, account, (e) => {
                  if (e) {
                    console.log(e);
                    setError(new Date().getTime(), e.message, 'error');
                  } else {
                    showThankDialog(true);
                  }
                });
              } else {
                showQrcode(true);
              }
            }}
            color='secondary'
            variant='outlined'
            />
          <Chip
            icon={<GithubIcon />}
            label={'Star'}
            className={classes.chip}
            component='a'
            href={`https://github.com/BigMurry/dragon-u`}
            target={'_blank'}
            clickable
            color='secondary'
            variant='outlined'
            />
        </div>
        <Dialog open={thankDialog} onClose={e => showThankDialog(false)}>
          <div className={classes.donateTitle}>
            <HeartIcon className={classes.donateIcon} />
            <Typography className={classes.titleMsg} variant={'h6'}>{`Thank you!`}</Typography>
            <HeartIcon className={classes.donateIcon} />
          </div>
        </Dialog>
        <Dialog open={qrcode} onClose={e => {
          showQrcode(false);
          setCopied(false);
        }}>
          <div className={classes.donateTitle}>
            <HeartIcon className={classes.donateIcon} />
            <Typography className={classes.titleMsg} variant={'h6'}>{`Thanks a lot`}</Typography>
            <HeartIcon className={classes.donateIcon} />
          </div>
          <div className={classes.donate}>
            <div className={classes.addressWrapper}>
              <CopyToClipboard text={DONATOR_ACCOUNT} onCopy={() => setCopied(true)}>
                <Typography className={classes.address} variant={'caption'}>{DONATOR_ACCOUNT}</Typography>
              </CopyToClipboard>
              {
                copied && <Typography variant={'caption'} className={classes.notify}>{'copied!'}</Typography>
              }
            </div>
            <QRCode value={DONATOR_ACCOUNT} />
          </div>
        </Dialog>
      </div>
    </div>
  );
};

Root = connect(
  ({web3, account}) => ({web3, account}),
  (dispatch) => ({setError: bindActionCreators(setErrorStore, dispatch)})
)(Root);

let RootWrapper = (props) => {
  return (
    <SnackbarProvider maxSnack={4}>
      <Root {...props} />
    </SnackbarProvider>
  );
};

export default RootWrapper;
