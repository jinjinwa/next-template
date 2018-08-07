/**
 *
 * 高阶组件: 全局包裹 provider,并通过getInitialProps获取通用信息
 * @param {Initial} 异步获取 props, 请求接口放在这里
 * @param {WrappedComponent} 组件
 * @returns return 一个拥有通用职能,新的组件
 */

import React, { Component } from "react";

export default Initial => WrappedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      const obj = await Initial(ctx);
      const { pathname, query, asPath } = ctx;
      const isServer = !!ctx.req;

      return {
        query,
        pathname,
        asPath,
        ...obj,
        isServer
      };
    }
    constructor(props) {
      super(props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
