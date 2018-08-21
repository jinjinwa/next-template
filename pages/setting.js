import React, { Component } from "react";
import stylesheet from "styles/setting.less";
import { observer, inject } from "mobx-react";
import { Page, Layout } from "@lib";
import { CurrentPage } from "@components";
// import { Loader } from "@components";

const Initial = async () => {
  const title = "设置";
  return { title };
};

@inject("store")
@observer
class Setting extends Component {
  render() {
    return (
      <Layout {...this.props} wrapClass="setting" isMenubar={true}>
        <CurrentPage name="设置" />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Layout>
    );
  }
}

export default Page(Initial)(Setting);
