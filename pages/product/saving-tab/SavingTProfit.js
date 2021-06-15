import styles from "/styles/product/FinnqSaving.module.scss";
import BtnAppDown from "../../../components/BtnAppDown";

const SavingTProfit = () => {
  return (
    <article className={`${styles["saving-tprofit"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className="visual-title">
          매월 이자가 늘어나는
          <br />
          T이득통장!
        </p>
        <p className={styles["thumb-txt"]}>
          예시) 세전, <mark>200</mark>만원, <mark>’20.06.15</mark> 입금 기준,{" "}
          <mark>24</mark>개월,
          <br className="mobile" /> 우대금리 최대 적용 시
        </p>

        <dl
          className={`${styles["saving-split--desc"]} ${styles["saving-common--desc"]} definition-list`}
        >
          <dt>가입정보</dt>
          <dd>
            <ul className={styles.desc}>
              <li>
                <strong>가입 조건</strong>
                <p className={styles.detail}>SKT 통신사 이용자</p>
              </li>
              <li>
                <strong>금리 조건</strong>
                <p className={styles.detail}>
                  <mark>200</mark>만원 한도 최대 연 <mark>2.0%</mark>
                </p>
              </li>
            </ul>
          </dd>
        </dl>

        <div className={`${styles["compare--btn-wrap"]} app-down`}>
          <BtnAppDown></BtnAppDown>
        </div>
      </div>

      <section className="desc-wrap">
        <div className={`item-desc ${styles["kdb-product"]}`}>
          <article className="desc-info">
            <p className={`sub-title ${styles["kdb-sub--title"]}`}>
              SKT 고객이라면,
              <br className="mobile"></br>
              <span className="txt-purple">
                최대 연 <mark>2%</mark>
              </span>
              금리!
            </p>
            <p className={styles["thumb-txt"]}>
              (세전, 200만원 한도, ’20.06.15 기준,
              <br className="mobile"></br> 우대금리 최대 적용 시)
            </p>

            <div className={styles["benefit-detail--wrap"]}>
              <dl className={styles["benefit-detail"]}>
                <dt>
                  기본금리 연 <mark>1.0%</mark>
                </dt>
                <dd>
                  만 <mark>17</mark>세 이상 SKT 고객 누구나!
                </dd>
              </dl>

              <dl className={styles["benefit-detail"]}>
                <dt>
                  우대금리 연 <mark>1.0%</mark>
                </dt>
                <dd>KDB산업은행 마케팅 이용 동의 시</dd>
              </dl>
            </div>

            <div
              className={`${styles["add-detail--wrap"]} ${styles["dash-info--wrap"]}`}
            >
              <ul className={`list-type dash ${styles["add-detail"]}`}>
                <li>
                  KDB산업은행 마케팅 이용 동의 및 신규 가입 시 인증한 SKT 회선
                  유지 시,
                  <br className="web"></br> 매일의 최종잔액 중 200만원 이하
                  금액에 한하여 최대 연 2.0% 금리 적용 (세전)
                </li>
                <li>200만원 초과 금액은 연 0.5% 기본금리 적용 (세전)</li>
                <li>
                  신규 가입 시 인증한 SKT 회선 미 유지 시, 전 구간 연0.1% 기본
                  금리 적용(세전)
                </li>
              </ul>
            </div>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/saving/saving-tprofit/img_finnq_pla2.png"
                alt="기본금리 연 1.6%, 우대금리 연1.0%, 총 금리최대 연 2.60% (SKT 이동통신비 자동이체 시)"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div
          className={`item-desc ${styles["kdb-product"]} ${styles["mobile-reverse--wrap"]}`}
        >
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/saving/saving-tprofit/img_finnq_pla3.png"
                alt=""
              ></img>
            </div>
          </article>
          <article className={`desc-info ${styles["product-text"]}`}>
            <p className={`sub-title ${styles["kdb-sub--title"]}`}>
              믿고 맡길 수 있는
              <br /> <span className="txt-purple">1금융권</span> 상품!
            </p>
            <div className={styles["benefit-detail--wrap"]}>
              <dl className={styles["benefit-detail"]}>
                <dt>KDB산업은행</dt>
                <dd>신뢰할 수 있는 1금융권</dd>
              </dl>

              <dl className={styles["benefit-detail"]}>
                <dt>예금자 보호</dt>
                <dd>최대 5천만원까지</dd>
                <dd className={styles["add-txt"]}>
                  - 1인 기준, 원금과 이자포함
                </dd>
              </dl>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className={`item-desc ${styles["kdb-product"]}`}>
          <article className="desc-info">
            <p className={`sub-title ${styles["kdb-sub--title"]}`}>
              입출금 및 관리는
              <br /> <span className="txt-purple">핀크</span>에서 간편하게!
            </p>
            <div className={styles["benefit-detail--wrap"]}>
              <dl className={styles["benefit-detail"]}>
                <dt>1일 최대 1천만원까지 무료송금</dt>
              </dl>

              <dl className={styles["benefit-detail"]}>
                <dt>무료 ATM 출금</dt>
              </dl>
            </div>
            <div
              className={`${styles["add-detail--wrap"]} ${styles["dash-info--wrap"]}`}
            >
              <ul className={`list-type dash ${styles["add-detail"]}`}>
                <li>무료송금 및 무료 ATM출금은 핀크에서 제공</li>
                <li>전국 하나은행 ATM 이용 시, 수수료 무료</li>
              </ul>
            </div>
          </article>
          <article className="sub-desc">
            <div className="img-wrap">
              <img
                src="/images/product/saving/saving-tprofit/img_finnq_pla4.png"
                alt=""
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <ul className="list-type mark width-fix">
          <li>
            한국산업은행 준법감시인 심의필 제<mark>2020-06-007</mark>호
            <br className="mobile"></br>
            <mark>(2020.06.11~2021.06.10)</mark>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default SavingTProfit;
