import React from "react";

const Payments = () => {
  return (
    <main class="payments-container">
      <div class="payments-nav">
        <h2 className="payments-nav-primary">payment navigation</h2>
        <h5 className="payments-nav-sec">INVOICES</h5>
        <h6 className="payments-nav-tert">MY BANK DETAILS</h6>
      </div>
      <div className="payments-details-container">
        <div class="payment-card">
          <p className="payment-card-details">
            Payment Date:<strong>&nbsp;Oct. 25,2022, 11.07 a.m. </strong>Amount
            Paid:
            <strong> ₹3150 </strong>
          </p>
          <p className="payment-card-details">Payment Made For Project</p>
          <p className="payment-card-details">K10 Maths Text Book Solution</p>
          <p className="payment-card-details">K12 Maths Text Book Solution</p>
        </div>
        <div class="payments-earning">
          <h5 className="payments-earning-heading">Lifetime Earning</h5>
          <p className="payments-earning-details">₹3150</p>
          <h5 className="payments-earning-heading">This Month Earning</h5>
          <p className="payments-earning-details">₹0</p>
        </div>
      </div>
    </main>
  );
};

export default Payments;
