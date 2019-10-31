const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <>
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
    <style jsx>{`
      .cart-item {
        width: 100%;
        display: flex;
        height: 80px;
        margin-bottom: 15px;
      }
      img {
        width: 30%;
      }
      .item-details {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 20px;
      }
      .name {
        font-size: 16px;
      }
    `}</style>
  </>
);

export default CartItem;
