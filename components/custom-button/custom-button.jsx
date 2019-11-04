const CustomButton = ({ children, inverted, purchaseBtn, ...otherProps }) => (
  <>
    <button
      className={`${inverted ? "inverted" : ""} ${
        purchaseBtn ? "purchase-btn" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
    <style jsx>
      {`
        .custom-button {
          min-width: 165px;
          width: auto;
          height: 50px;
          padding: 0 35px 0 35px;
          font-size: 1rem;
          background-color: black;
          color: white;
          text-transform: uppercase;
          font-weight: bolder;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }
        .custom-button:hover {
          background-color: white;
          color: black;
          border: 1px solid black;
        }
        .custom-button.inverted {
          background-color: white;
          color: black;
          border: 1px solid black;
        }
        .inverted:hover {
          background-color: black;
          color: white;
          border: none;
        }
        .custom-button.purchase-btn {
          background-color: #00bea4;
          color: white;
          border: 1px solid black;
        }
        .purchase-btn:hover {
          background-color: white;
          color: black;
          border: none;
        }
      `}
    </style>
  </>
);

export default CustomButton;
