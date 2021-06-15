import styles from "/styles/product/FinnqSaving.module.scss";

export default function SavingTFinnq() {
  return (
    <article className={`${styles["saving-tfinnq"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className="visual-title">
          SKT 고객이라면,
          <br />
          최대 연 2.6%
          <br />
        </p>
        <p className={styles["thumb-txt"]}>
          <mark>20.04.01</mark> 현재, 세전
        </p>

        <dl
          className={`${styles["saving-split--desc"]} ${styles["saving-common--desc"]} definition-list`}
        >
          <dt>가입정보</dt>
          <dd>
            <ul className={styles.desc}>
              <li>
                <strong>가입 기간</strong>
                <p className={styles.detail}>
                  <mark>12</mark>개월, <mark>24</mark>개월 중 택 1
                </p>
              </li>
              <li>
                <strong>가입 금액</strong>
                <p className={styles.detail}>
                  5만원, <mark>10</mark>만원, <mark>15</mark>만원 중 택1
                </p>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <section className="desc-wrap" style={{ clear: "both" }}>
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">하나은행 T핀크적금</p>
            <p className="sub-desc">
              <span>
                <em className="txt-green">
                  연 <mark>1.6</mark>%
                </em>{" "}
                기본금리
              </span>
              <br></br>
              <span>
                <mark>SKT</mark> 이동통신비 자동이체 시
              </span>
              <br className="mobile"></br>
              <span className="mobile"> </span>
              <span>
                <em className="txt-green">
                  연 <mark>1.0%</mark>
                </em>{" "}
                우대금리 제공
              </span>
            </p>
            <p className={styles["thumb-txt"]}>
              <mark>20.04.01</mark> 현재, 세전
            </p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/saving/saving-tfinnq/img_finnq_savings01.png"
                alt="기본금리 연 1.6%, 우대금리 연1.0%, 총 금리최대 연 2.60% (SKT 이동통신비 자동이체 시)"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <ul className="list-type mark width-fix">
          <li>
            본 홍보물은 <mark>2021</mark>년 2월 <mark>28</mark>일까지
            유효합니다.
          </li>
          <li>
            하나은행 준법감시인 심사필 <mark>2020</mark>-광고-<mark>1841</mark>
            호<br className="mobile"></br>
            <mark>(2020.03.30)</mark>
          </li>
        </ul>
      </section>
    </article>
  );
}
