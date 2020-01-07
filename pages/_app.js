import React from "react";
import App from "next/app";
import { Grommet, Box } from "grommet";
import { GlobalStyles } from "../globalStyles";
import { initializeStore } from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/header/header";
import withRedux from "next-redux-wrapper";
import lightTheme from "../theme/lightTheme";
import darkTheme from "../theme/darkTheme";
import styled from "styled-components";

const HeaderWrapper = styled(Box)`
  position: sticky;
  top: 0px;
  z-index: 10;
`;

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
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <Component {...pageProps} />
        </Grommet>
      </Provider>
    );
  }
}

export default withRedux(initializeStore, { debug: false })(MyApp);
