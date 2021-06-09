import React from "react";
import BtnAppDown from "../../../components/BtnAppDown";
import styles from "/styles/product/FinnqLoan.module.scss";

const LoanEmergencyPage = () => {
  return (
    <article className={`${styles["loan-emergency"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className={styles["loan-symbol"]}>번개대출</p>
        <p className="visual-title">
          300만원까지<br></br>
          지금 바로 꺼내쓰는<br className="mobile"></br> 비상금대출
        </p>
        <ul className={styles["list-desc"]}>
          <li>
            최대한도 <mark>300</mark>만원
          </li>
          <li>
            최저금리 <mark>3.08% ~</mark>
          </li>
        </ul>
        <div className="btn-wrap app-down">
          <BtnAppDown></BtnAppDown>
        </div>
      </div>

      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">
              서류, 방문 필요없이<br></br>모바일로<br></br>조회부터 약정까지
            </p>
            <p className="sub-desc">
              1금융권 DGB대구은행의<br></br>비상금 대출 가능여부를 바로 확인
            </p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-emergency/img_market_dgbfqloan.png"
                alt="1금융권 은행대출 / 24시간,365일 간편한 모바일 신청"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="width-fix">
          <p className="sub-title">원하는 약정 방식 선택</p>
        </div>
        <div className={`${styles["split-cont"]} item-desc`}>
          <article className="desc-info">
            <div className={styles["box-wrapper"]}>
              <p className={styles["text-title"]}>만기일시상환 방식</p>
              <div className={styles.detail}>
                <span className={styles.icon}>
                  <img src="/images/product/loan/loan-emergency/img_market_dgbfqicon01.png"></img>
                </span>
                <div className={styles["text-wrap"]}>
                  <p className={styles["text-point"]}>
                    최대 <mark>300</mark>만원 한도로 약정
                  </p>
                  <p className={styles.text}>
                    약정된 금액이 입출금 계좌에 바로 입금되고
                    <br className="mobile"></br> 매월 한도금액의 이자가 부과
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="desc-info">
            <div className={styles["box-wrapper"]}>
              <p className={styles["text-title"]}>마이너스통장 방식</p>
              <div className={styles.detail}>
                <span className={styles.icon}>
                  <img src="/images/product/loan/loan-emergency/img_market_dgbfqicon02.png"></img>
                </span>
                <div className={styles["text-wrap"]}>
                  <p className={styles["text-point"]}>
                    <mark>100</mark>만원 한도로 약정
                  </p>
                  <p className={styles.text}>
                    별도로 약정된 금액이 입금 되지 않고,
                    <br className="mobile"></br> 약정 한도 내에서 자유롭게 꺼내
                    쓰고<br className="mobile"></br> 사용한 금액만큼만 이자가
                    부과
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">중도상환수수료 0원</p>
            <p className="sub-desc">부담없이 사용하고 여유자금이 생길때 갚기</p>
            <p className="sub-desc">
              <span className={styles["text-point"]}>
                다시 신청시에는 신용등급 변동 등의 사유로 재약정이<br></br>{" "}
                불가능할 수 있습니다.
              </span>
            </p>
          </article>
          <article className={`${styles["loan-style"]} desc-info`}>
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-emergency/img_market_dgbfqloan02.png"
                alt="1금융권 은행대출 / 24시간,365일 간편한 모바일 신청"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <ul className="list-type mark width-fix">
          <li>
            DGB대구은행 준법감시인 심의필 제19-287호<br></br>
            (2019.09.06~2021.09.05)
          </li>
        </ul>
      </section>
    </article>
  );
};

export default LoanEmergencyPage;
