import React from "react";

export default (name = "") => {
  return (
    <div className="current-page">
      {name}
      <style jsx>{`
        .current-page {
          text-align: center;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
