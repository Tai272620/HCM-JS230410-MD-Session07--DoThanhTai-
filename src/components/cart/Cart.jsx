import React, { useEffect, useState } from "react";
import "./cart.scss";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      url: "../images/banner_1.jpg",
      desc: "WOMEN'S",
    },
    {
      id: 2,
      url: "../images/banner_2.jpg",
      desc: "ACCESSORIES'S",
    },
    {
      id: 3,
      url: "../images/banner_3.jpg",
      desc: "MEN'S",
    },
  ];
  return (
    <>
      <div className={`cart-container ${showCart ? "show" : ""}`}>
        {products.map((item, index) => (
          <div
            className="card"
            style={{
              width: "30%",
              height: "250px",
              backgroundImage: `url(${item.url})`,
            }}
            key={index}
          >
            <p className="cart-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
