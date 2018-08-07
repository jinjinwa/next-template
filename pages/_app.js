import App, { Container } from "next/app";
import React from "react";
import withMobxStore from "../lib/mobx-store";
import { Provider } from "mobx-react";
import { PageTransition } from "next-page-transitions";

class MyApp extends App {
  render() {
    const { Component, pageProps, mobxStore } = this.props;
    console.log(this.props);
    return (
      <Container>
        <Provider store={mobxStore}>
          <PageTransition timeout={200} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </Provider>
      </Container>
    );
  }
}

export default withMobxStore(MyApp);
