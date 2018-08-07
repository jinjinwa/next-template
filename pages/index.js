import React, { Component } from "react";
import stylesheet from "styles/index.less";
import { observer, inject } from "mobx-react";
import { Page, Layout } from "@lib";
import { Button } from "antd-mobile";
import Link from "next/link";

const Initial = async ctx => {
  const title = "首页";
  return { title, ctx: ctx.mobxStore._test.timer };
};

@inject("store")
@observer
class Index extends Component {
  render() {
    console.log("index", this.props);
    return (
      <Layout {...this.props} wrapClass="welcome">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="logo">
          <img src="../static/next-black.svg" />
        </div>
        <div className="describe">一个开箱即用的NEXT.JS模板</div>
        <Link href="/home" as="/home">
          <Button
            type="primary"
            size="small"
            inline
            style={{ marginTop: "20px" }}
          >
            查看DEMO
          </Button>
        </Link>
      </Layout>
    );
  }
}

export default Page(Initial)(Index);
