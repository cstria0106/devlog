import React from "react";

const DefaultLayoutHeader = () => {
  return (
    <>
      <div className="wrapper">
        <div className="inner">
          <div className="title-text">구름.me</div>
          <div className="display-mode-change">다크</div>
        </div>
      </div>
      <style jsx>{`
        .inner {
          max-width: 1000px;
          margin: 0 auto;
          padding: 15px 0 30px 0;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .title-text {
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default DefaultLayoutHeader;
