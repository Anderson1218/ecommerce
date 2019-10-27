import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import ShoppingIcon from "../../public/shopping-bag.svg";

const CartIcon = ({ itemCount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIcon style={{ width: "3rem", height: "4rem" }} />
        {/* <span className="item-count">{itemCount}</span> */}
        <span className="item-count">5</span>
      </div>
      <style jsx>{`
        .cart-icon {
          width: 2.5rem;
          height: 2rem;
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
          top: 0.8rem;
        }
      `}</style>
    </>
  );
};

export default CartIcon;