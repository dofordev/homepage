import React from "react";
import BtnAppDown from "../../../components/BtnAppDown";
import styles from "/styles/product/FinnqLoan.module.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["loan-living"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className={styles["loan-symbol"]}>번개대출</p>
        <p className="visual-title">
          급전이 필요할 땐<br></br> 핀크 생활비대출
        </p>
        <ul className={styles["list-desc"]}>
          <li>
            최대한도 <mark>500</mark>만원
          </li>
          <li>
            최저금리 <mark>6.264% ~</mark>
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
              휴대폰 본인인증만 하면 <br></br> 대출심사 끝!
            </p>
            <p className="sub-desc">24시간, 365일 간편 신청</p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-living/img_product_hana02.png"
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
              1금융권 하나은행 <br></br> 대출신청부터
              <br className="mobile"></br> 관리까지 한 번에
            </p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-living/img_product_hana03.png"
                alt=""
              ></img>
            </div>
          </article>
        </div>
        <ul className="list-type mark width-fix">
          <li>본 홍보물은 2021년 11월 30일까지 유효합니다.</li>
          <li>심의번호 : 준법감시인 심의필 제2020-광고-5569호 (2020.12.30)</li>
        </ul>
      </section>
    </article>
  );
};

export default LoanComparePage;
