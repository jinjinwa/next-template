import React from "react";
import PropTypes from "prop-types";

const currentPage = ({ name = "默认" }) => {
  return (
    <div className="current-page">
      <div>
        我是
        {name}
        页面
      </div>
      <style jsx>{`
        .current-page {
          text-align: center;
          margin: 50px auto 0px auto;
        }
      `}</style>
    </div>
  );
};

currentPage.propTypes = {
  name: PropTypes.string
};

export default currentPage;
