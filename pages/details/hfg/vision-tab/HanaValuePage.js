import React from "react";
import styles from "/styles/hfg/FinnqHfg.module.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["hfg"]} contents-details`}>
      <div className="width-fix">
        <p className={styles.title}>POWER ON INTEGRITY</p>
        <p className={styles.text}>
          위대한 성공의 시작점에는 늘 가슴 뛰는 비전이 있었습니다.
        </p>

        <p className={styles.text}>
          하나금융그룹은 하나인만의 생각하는 방식, 창조적이고 강력한 기업문화를
          가지고 있습니다.
        </p>
        <p className={styles.text}>
          하나인들이 공유하고 실천하는 핵심가치는 기업 활동에 있어서 가치판단과
          행동의 기준이 되는 가장 소중한 무형자산입니다.
        </p>
        <div className={styles["img-cont"]}>
          <img src="/images/hfg/financial_img2.png" alt=""></img>
          <div className="blind">
            <h1>POWER on Integrity. </h1>
            <p>
              하나금융그룹 핵심가치는 손님을 우선으로 하는 기업과 개인의
              가치판단 및 행동의 기준입니다.
            </p>
            <dl>
              <dt>
                {" "}
                INTEGRITY(정직·성실·투명) 산처럼 변하지 않는 INTEGRITY. 금융인의
                기본적인 윤리로 항상 맡은 바를 정직하고 성실하게 이행하는 것.
              </dt>
              <dd>
                <ul>
                  <li>
                    PASSION(열정) - 태양같은 열정 : 책임감있게 최선을 다하고
                    변화와 혁신으로 더 나은 가치를 추구하는것.{" "}
                  </li>
                  <li>
                    OPENNESS(열린마음) - 하늘같은 열린 마음 : 유연하고 편견없이
                    사람이나 상황을 이해하고 공감하는것.
                  </li>
                  <li>
                    WITH CUSTOMER(손님우선) - 왕처럼 모시는 손님 : 손님을
                    최우선으로 삼는 마음으로 그들의 필요를 탐구하고 채워주는 것.
                  </li>
                  <li>
                    EXCELLENCE(전문성) - 별처럼 빛나는 전문성 : 최고의 신뢰를
                    얻기 위하여 각자의 분야에서 차별화된 역략을 계발하는 것.
                  </li>
                  <li>
                    RESPECT(존중과 배려) - 마음에서 우러나는 존중과 배려. 개인
                    역략 발휘와 상호협력을 위한 기본 자세로 상대방 입장에서
                    생각하고 대하는 것.{" "}
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LoanComparePage;
