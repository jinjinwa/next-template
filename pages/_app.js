import App, { Container } from "next/app";
import React from "react";
import { withMobxStore } from "@lib";
import { Provider } from "mobx-react";

class MyApp extends App {
  render() {
    const { Component, pageProps, mobxStore } = this.props;
    console.log(this.props);
    return (
      <Container>
        <Provider store={mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withMobxStore(MyApp);
