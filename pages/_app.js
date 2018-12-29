import '../styles/bootstrap';
// bootstap

import React from 'react';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import Helmet from 'react-helmet';
import {initStore} from '../redux/store';
import {APP_NAME} from '../lib/constants';
import {SheetsRegistry} from 'jss';

import { createMuiTheme } from '@material-ui/core/styles';
import { createGenerateClassName, StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function createContext() {
  return {
    theme,
    generateClassName: createGenerateClassName(),
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry()
  };
}

function getContext() {
  // server side new context instance per request
  if (!process.browser) {
    return createContext();
  }

  // client side share context instance
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }
  return global.__INIT_MATERIAL_UI__;
}

export default withRedux(initStore, {debug: false})(
  class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return {
        pageProps
      };
    }

    constructor(props) {
      super(props);
      this.pageContext = getContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, store, pageProps } = this.props;
      return (
        <Container>
          <Provider store={store}>
            {/* Wrap every page in Jss and Theme providers */}
            <StylesProvider
              generateClassName={this.pageContext.generateClassName}
              sheetsRegistry={this.pageContext.sheetsRegistry}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <React.Fragment>
                <Helmet
                  htmlAttributes={{lang: 'en'}}
                  title={APP_NAME}
                  meta={[
                    {charset: 'utf-8'},
                    { name: 'viewport', content: 'user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height' },
                    { property: 'og:title', content: APP_NAME }
                  ]}
                />
                <ThemeProvider theme={this.pageContext.theme}>
                  <CssBaseline />
                  <Component pageContext={this.pageContext} {...pageProps} />
                </ThemeProvider>
              </React.Fragment>
            </StylesProvider>
          </Provider>
        </Container>
      );
    }
  }
);
