import React from "react";
import styles from "/styles/hfg/FinnqHfg.module.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["hfg"]} contents-details`}>
      <div className="width-fix">
        <p className={styles.title}>신뢰받고 앞서가는 글로벌 금융그룹</p>
        <p className={styles.text}>
          위대한 성공의 시작점에는 늘 가슴 뛰는 비전이 있었습니다.
        </p>
        <p className={styles.text}>
          하나금융그룹은 그룹 구성원 모두가 참여하는 상향식 의견수렴(bottom-up)
          방식을 통하여, 그룹의 존재이유인 미션, 새로운 10년의 비전, 그리고 모든
          가치판단의 기준이 될 핵심가치를 다시 한 번 새롭게 정립하였습니다.
        </p>
        <p className={styles.text}>
          하나금융그룹은 이제 새로운 비전과 가치를 바탕으로 하나인으로서
          자부심을 안고 더 나은 미래를 향해 나아갈 것입니다.
        </p>
        <div className={styles["img-cont"]}>
          <img src="/images/hfg/financial_img1.png" alt=""></img>
          <div className="blind">
            <h1>
              미션 - 함께 성장하며 행복을 나누는 금융 Growing together, sharing
              happiness.
            </h1>
            <h2>
              2025비전 - 신뢰받고 앞서가는 글로벌 금융그룹 The trusted premier
              global financial group.
            </h2>
            <h3>전략목표 BEST 2025</h3>
            <ul>
              <li>은행 이익 1위 - BEST BANK</li>
              <li>글로벌 40% EXPANDING TO GLOBAL </li>
              <li>비은행 30% STABLE PORTFOLIO </li>
              <li>브랜드 신뢰도 제고 TRUSTED GROUP.</li>
            </ul>
            <h4>핵심가치 POWER ON INTERGRITY</h4>
            <ul>
              <li>열정 - PASSION</li>
              <li>열린마음 - OPENNESS</li>
              <li>손님우선 WITH CUSTOMER</li>
              <li>전문성 EXCELLENCE</li>
              <li>존중과 배려 RESPECT. </li>
            </ul>
            INTEGRITY
          </div>
        </div>
      </div>
    </article>
  );
};

export default LoanComparePage;
