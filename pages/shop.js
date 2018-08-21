import React, { Component } from "react";
import stylesheet from "styles/shop.less";
import { observer, inject } from "mobx-react";
import { Page, Layout } from "@lib";
import { CurrentPage } from "@components";
// import Link from "next/link";

const Initial = async () => {
  const title = "购物";
  return { title };
};

@inject("store")
@observer
class Shop extends Component {
  render() {
    return (
      <Layout {...this.props} wrapClass="shop" isMenubar={true}>
        <CurrentPage name="购物" />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Layout>
    );
  }
}

export default Page(Initial)(Shop);
