import React, { Component } from "react";
import stylesheet from "styles/home.less";
import { observer, inject } from "mobx-react";
import { Page, Layout } from "@lib";
// import Link from "next/link";

const Initial = async () => {
  const title = "首页";
  return { title };
};

@inject("store")
@observer
class Index extends Component {
  render() {
    return (
      <Layout {...this.props} wrapClass="home" isMenubar={true}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Layout>
    );
  }
}

export default Page(Initial)(Index);
