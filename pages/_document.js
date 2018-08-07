import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/antd-mobile/dist/antd-mobile.min.css"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <link href="../static/css/nprogress.mobile.css" rel="stylesheet" />
          <link href="../static/css/reset.css" rel="stylesheet" />
          <link href="../static/iconfont/iconfont.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
