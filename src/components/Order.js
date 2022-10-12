import React from "react";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="form">
      <form>
        <h1>Your order has been placed</h1>
        <div className="form">
          <Link to="/home" style={{ textDecoration: "none" }}>
            ShopMore
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Order;
