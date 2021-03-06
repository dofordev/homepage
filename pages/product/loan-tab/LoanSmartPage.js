import React from "react";
import BtnAppDown from "../../../components/BtnAppDown";
import styles from "/styles/product/FinnqLoan.module.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["loan-smart"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className={styles["loan-symbol"]}>번개대출</p>
        <p className="visual-title">
          입금까지<br className="mobile"></br> 번개처럼 빠른<br></br> 똑똑대출
        </p>
        <ul className={styles["list-desc"]}>
          <li>
            최대한도 <mark>300</mark>만원
          </li>
          <li>
            최저금리 <mark>9.88% ~</mark>
          </li>
        </ul>
        <div className="btn-wrap app-down">
          <BtnAppDown></BtnAppDown>
        </div>
      </div>

      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">원하는 계좌로 즉시 입금</p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-smart/img_visual_smart2.png"
                alt=""
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">
              핀크 비밀번호로 <br></br> 대출심사 바로 확인
            </p>
            <p className={`${styles["common--sub-desc"]} sub-desc`}>
              핀크 T스코어 활용 시<br></br>최대 1.0% 금리할인 혜택
            </p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-smart/img_visual_smart3.png"
                alt=""
              ></img>
            </div>
          </article>
        </div>

        <ul className="list-type mark width-fix">
          <li>준법감시인 심의필 : 제 2020-80호(2020.8.10)</li>
        </ul>
      </section>
    </article>
  );
};

export default LoanComparePage;
