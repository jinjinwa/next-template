import React, { Component } from "react";
import stylesheet from "styles/discover.less";
import { observer, inject } from "mobx-react";
import { Page, Layout } from "@lib";
import { CurrentPage } from "@components";
// import Link from "next/link";

const Initial = async () => {
  const title = "发现";
  return { title };
};

@inject("store")
@observer
class Discover extends Component {
  render() {
    return (
      <Layout {...this.props} wrapClass="discover" isMenubar={true}>
        <CurrentPage name="发现" />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Layout>
    );
  }
}

export default Page(Initial)(Discover);
