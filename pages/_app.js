import React from "react";
import App from "next/app";
import { Grommet } from "grommet";
import { GlobalStyles } from "../globalStyles";
import { initializeStore } from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/header/header";
import withRedux from "next-redux-wrapper";
import lightTheme from "../theme/lightTheme";
import darkTheme from "../theme/darkTheme";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Grommet theme={lightTheme} full>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </Grommet>
      </Provider>
    );
  }
}

export default withRedux(initializeStore, { debug: true })(MyApp);
