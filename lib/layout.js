import React, { Component } from "react";
import { LocaleProvider } from "antd-mobile";
import Head from "next/head";
import { MenuBar, NonetWork } from "@components";
import NProgress from "nprogress";
import Router from "next/router";
import PropTypes from "prop-types";
import { PageTransition } from "next-page-transitions";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

//容器组件
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online:
        typeof window !== "undefined"
          ? window.navigator.onLine ||
            typeof window.navigator.onLine === "undefined"
          : true
    };
  }
  componentDidMount() {
    this.processNetwork();
  }

  //检测有网,无网状态
  processNetwork = () => {
    window.addEventListener("online", () => {
      this.setState({ online: window.navigator.onLine });
    });
    window.addEventListener("offline", () => {
      this.setState({ online: window.navigator.onLine });
    });
  };

  render() {
    const {
      wrapClass = "", //页面容器class
      children,
      pathname,
      title = "默认标题",
      isMenubar = false
    } = this.props;
    const { online } = this.state;
    return (
      <LocaleProvider>
        <div className={wrapClass}>
          <Head>
            <title>{title}</title>
          </Head>
          {/* 页面切换 */}
          <PageTransition timeout={200} classNames="page-transition">
            <>{online ? children : <NonetWork />}</>
          </PageTransition>
          {/* MenuBar */}
          {isMenubar && <MenuBar pathname={pathname} />}
        </div>
      </LocaleProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  wrapClass: PropTypes.string,
  title: PropTypes.string,
  isMenubar: PropTypes.bool,
  pathname: PropTypes.string
};
