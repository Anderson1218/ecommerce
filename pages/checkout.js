import Head from "next/head";

const CheckoutPage = () => {
  return (
    <div>
      <Head>
        <title>checkout page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Product Name</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .checkout-page {
          width: 70%;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 0;
        }
        .checkout-header {
          width: 100%;
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid darkgrey;
        }
        .header-block {
          text-transform: capitalize;
          width: 23%;
        }
        span {
          font-size: 1.5em;
        }

        .header-block:last-child {
          width: 8%;
        }
        .total {
          margin-top: 30px;
          margin-left: auto;
          font-size: 36px;
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
