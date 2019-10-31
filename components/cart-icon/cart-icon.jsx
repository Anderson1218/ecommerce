import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import ShoppingIcon from "../../public/shopping-bag.svg";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <>
      <div className="cart-icon">
        <ShoppingIcon style={{ width: "3rem", height: "4rem" }} />
        <span className="item-count">{itemCount || 0}</span>
      </div>
      <style jsx>{`
        .cart-icon {
          width: 2.5rem;
          height: 1rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .item-count {
          position: absolute;
          font-size: 0.5rem;
          font-weight: bold;
          top: 30%;
        }
      `}</style>
    </>
  );
};

export default CartIcon;
