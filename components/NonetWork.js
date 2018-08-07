/*
 * @Author: Jan 
 * @Date: 2018-06-26 20:25:25 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-08-07 17:59:38
 * 
 * 无网络提示页
 */
import React from "react";

const NonetWork = () => {
  return (
    <div className="Nonetwork">
      <div className="container">
        <div className="imgs">
          <img src="../static/neterror.png" />
        </div>
        <p className="describe1">数据加载失败</p>
        <p className="describe2">请确认您的网络环境是否正常~</p>
      </div>
      <style jsx>{`
        .Nonetwork {
          position: absolute;
          z-index: 2;
          height: 100%;
          width: 100%;
          top: 0px;
          bottom: 0px;

          .container {
            .imgs {
              display: inline-block;
              width: 99px;
              height: 99px;
              img {
                height: 100% !important;
                width: 100% !important;
              }
            }
            .describe1 {
              font-size: 24px;
              color: #666666;
              margin-top: 19px;
            }
            .describe2 {
              margin-top: 10px;
              font-size: 18px;
              color: #999999;
            }
            width: 95%;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            /* IE 9 */
            -moz-transform: translate(-50%, -50%);
            /* Firefox */
            -webkit-transform: translate(-50%, -50%);
            /* Safari 和 Chrome */
            -o-transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default NonetWork;
