import React, { Component } from "react";
import Router from "next/router";
import { TabBar } from "antd-mobile";
import PropTypes from "prop-types";

const tabBarData = [
  {
    title: "首页",
    icon: "icon-shouye",
    selectedIcon: "icon-shouye",
    link: "/home"
  },
  {
    title: "设置",
    icon: "icon-shezhi",
    selectedIcon: "icon-shezhi",
    link: "/setting"
  },
  {
    title: "发现",
    icon: "icon-faxian",
    selectedIcon: "icon-faxian",
    link: "/discover"
  },
  {
    title: "购物",
    icon: "icon-shangcheng",
    selectedIcon: "icon-shangcheng",
    link: "/shop"
  }
];

class MenuBar extends Component {
  render() {
    const { pathname = "", isMenubar } = this.props;
    return (
      <div className="fix-bar-bottom">
        <TabBar hidden={isMenubar} tabBarPosition="bottom">
          {tabBarData.map(({ title, icon, selectedIcon, link }) => (
            <TabBar.Item
              key={link}
              title={title}
              icon={<i className={`iconfont ${icon}`} />}
              selectedIcon={<i className={`iconfont ${selectedIcon}`} />}
              selected={pathname === link}
              onPress={() => Router.push(`${link}`, `${link}`)}
            />
          ))}
        </TabBar>
        <style jsx>{`
          .fix-bar-bottom {
            position: fixed;
            bottom: 0px;
            width: 100%;
            z-index: 2;
            p {
              height: 100px;
            }
          }
        `}</style>
      </div>
    );
  }
}

MenuBar.propTypes = {
  isMenubar: PropTypes.bool,
  pathname: PropTypes.string
};

export default MenuBar;
