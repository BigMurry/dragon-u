import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import {initStore} from '../redux/store';
import {APP_NAME, ETH_MAIN_NODE} from '../lib/constants';
import {EtherProvider} from 'use-ether-provider';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <EtherProvider networks={[1, 3, 5]} backupJsonRpcUrl={ETH_MAIN_NODE} ms={10000}>
              <Component {...pageProps} />
            </EtherProvider>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(initStore)(withReduxSaga(MyApp));
