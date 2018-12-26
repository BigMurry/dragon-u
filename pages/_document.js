import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='shortcut icon' type='image/jpeg' href='/static/assets/favicon.png' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context to collected side effects.
  let context;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      context = props.pageContext;
      return <Component {...props} />;
    };
    return WrappedComponent;
  });

  return {
    ...page,
    pageContext: context,
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          dangerouslySetInnerHTML={{ __html: context.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
      )
  };
};

export default MyDocument;
