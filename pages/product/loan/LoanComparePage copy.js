import React from "react";
import styles from "../../../styles/product/FinnqLoan.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["loan-compare"]} contents-details`}>
      <div className="contents-visual">
        <p className="visual-title">
          같은 상품을 <br className="mobile"></br>다른 금리로 제공하는
          <br></br>대출 비교 서비스
        </p>
        <div className={styles["inner-box"]}>
          <p className={styles["text-wrap"]}>
            <span className={styles.text}>
              신용도에 영향없이 한번에 조회 가능
            </span>
            <a
              href="https://loan.finnq.com/intro/finnq?pcn=WEB_Bridge"
              target="_blank"
              className={styles["btn-cercle"]}
            >
              대출 금리 비교하러 가기 <em className={styles.arrow}>&gt;</em>
            </a>
          </p>
          <div className={`${styles["btn-wrap"]} app-down`}>
            <a href="#none" className="btn btn-google">
              <span>Google Play</span>
            </a>
            <a href="#none" className="btn btn-apple">
              <span>App Store</span>
            </a>
          </div>
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

export default LoanComparePage;
