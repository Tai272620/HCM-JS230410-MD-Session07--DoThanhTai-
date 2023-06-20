import React from "react";
import "./delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <div className="delivery-box">
        <div className="delivery-img">
          <img src="../images/dev-01.png" alt="" />
        </div>
        <div className="delivery-desc">
          <h5>FREE SHIPPING</h5>
          <p>Suffered Alteration in Some Form</p>
        </div>
      </div>
      <div className="delivery-box">
        <div className="delivery-img">
          <img src="../images/dev-02.png" alt="" />
        </div>
        <div className="delivery-desc">
          <h5>CASH ON DELIVERY</h5>
          <p>The internet Tend To Repeat</p>
        </div>
      </div>
      <div className="delivery-box">
        <div className="delivery-img">
          <img src="../images/dev-03.png" alt="" />
        </div>
        <div className="delivery-desc">
          <h5>45 DAYS RETURN</h5>
          <p>Making it Look Like Readable</p>
        </div>
      </div>
      <div className="delivery-box">
        <div className="delivery-img">
          <img src="../images/dev-04.png" alt="" />
        </div>
        <div className="delivery-desc">
          <h5>OPENING ALL WEEK</h5>
          <p>8AM - 09PM</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
