import React from "react";
import "../../../styles/product/FinnqLoan.module.scss";

const LoanEmergencyPage = () => {
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          300만원까지<br></br>
          지금 바로 꺼내쓰는<br className="mobile"></br> 비상금대출
        </p>
        <div className="btn-wrap app-down">
          <a href="#none" className="btn btn-google">
            <span>Google Play</span>
          </a>
          <a href="#none" className="btn btn-apple">
            <span>App Store</span>
          </a>
        </div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 1</div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 2</div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 3</div>
      </div>
    </article>
  );
};

export default LoanEmergencyPage;
