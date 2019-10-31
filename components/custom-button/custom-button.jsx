const CustomButton = ({ children, inverted, ...otherProps }) => (
  <>
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
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
          letter-spacing: 0.5px;
          line-height: 50px;
          padding: 0 35px 0 35px;
          font-size: 15px;
          background-color: black;
          color: white;
          text-transform: uppercase;
          font-family: "Shadows Into Light", cursive;
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
      `}
    </style>
  </>
);

export default CustomButton;
