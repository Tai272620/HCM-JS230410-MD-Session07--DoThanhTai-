import React from "react";
import CountDown from "../countdown/CountDown";
import "./deal.scss";

const Deal = () => {
  return (
    <div className="deal-container">
      <img src="../images/deal_ofthe_week.png" alt="" />
      <CountDown />
    </div>
  );
};

export default Deal;
