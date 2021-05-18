import React from "react";
import styles from "../../../../styles/hfg/FinnqHfg.module.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["hfg"]} contents-details`}>
      <div className="width-fix">
        <div className={styles["img-cont"]}>
          <img src="/images/hfg/financial_img3.png" alt=""></img>
        </div>
      </div>
    </article>
  );
};

export default LoanComparePage;
