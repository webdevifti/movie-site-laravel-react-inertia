import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const MainContent = ({categories}) => {
  return (
    <div className="container">
      <div className="main-content">
        <div className="row">
          <LeftContent />
          <RightContent categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
