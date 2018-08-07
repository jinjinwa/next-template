import React, { Component } from "react";
import stylesheet from "styles/home.less";
import { observer, inject } from "mobx-react";
import { Page, Layout } from "@lib";
// import Link from "next/link";

const Initial = async () => {
  const title = "HOME";
  return { title };
};

@inject("store")
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  handleSwitch = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    console.log("index", this.props);
    const { hidden } = this.state;
    return (
      <Layout {...this.props} wrapClass="home" isMenubar={hidden}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="switch" onClick={this.handleSwitch}>
          点击切换tab-bar
        </div>
      </Layout>
    );
  }
}

export default Page(Initial)(Index);
