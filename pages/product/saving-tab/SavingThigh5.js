import styles from "/styles/product/FinnqSaving.module.scss";
import BtnAppDown from "../../../components/BtnAppDown";

const Savinghigh5 = () => {
  return (
    <article className={`${styles["saving-high5"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className="visual-title">
          상식을 뛰어넘는
          <br />
          최대
          <em className={styles["color-red"]}>
            연 <mark>5.0%</mark>
          </em>{" "}
          자유적금
        </p>

        <dl
          className={`${styles["saving-split--desc"]} ${styles["saving-common--desc"]} definition-list`}
        >
          <dt>가입정보</dt>
          <dd>
            <ul className={styles.desc}>
              <li>
                <strong>가입 기간</strong>
                <p className={styles.detail}>1년, 2년</p>
              </li>
              <li>
                <strong>가입 금액</strong>
                <p className={styles.detail}>
                  매월 1만원 ~ 최대 <mark>20</mark>만원까지
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
        <div className={`item-desc ${styles["high5-product--detail"]}`}>
          <article>
            <p className="sub-title">
              핀크라서 가능한 <br className="mobile" />
              최대 연 <mark>5.0%</mark> 적금 금리
            </p>
            <p className={styles["sub-add--text"]}>
              세전 <mark>20.03.30</mark> 기준 <br></br>
              적금은 우대금리 조건 충족으로 우대이율 최대 연 <mark>
                3.0%
              </mark>{" "}
              적용 시
            </p>
          </article>
          <article>
            <p className={styles["sub-detail--title"]}>
              KDB <em>X</em> T high5 적금
            </p>
            <ul className={styles["detail-info--list"]}>
              <li>
                <dl>
                  <dt>
                    <span className="txt-red">
                      연 <mark>2.0%</mark> 기본금리
                    </span>
                    <em className={styles.txt}>(세전)</em>
                  </dt>
                  <dd>
                    <mark>17</mark>세 이상 <mark>SKT</mark> 고객 누구나!
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span className="txt-blue">
                      연 <mark>2.0%</mark> 우대금리 I
                    </span>
                    <em className={styles.txt}>(세전)</em>
                  </dt>
                  <dd>
                    KDB 산업은행 마케팅 활용 동의
                    <br />및 만기까지 <mark>SKT</mark> 회선 유지 시
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span className="txt-blue">
                      연 <mark>1.0%</mark> 우대금리 II
                    </span>
                    <em className={styles.txt}>(세전)</em>
                  </dt>
                  <dd>
                    적금 만기까지
                    <br />
                    <mark>SKT 5</mark>
                    만원 이상 요금제 이용
                    <br />
                    또는 통신비 자동이체 유지 시
                  </dd>
                </dl>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <ul className="list-type mark width-fix">
          <li>
            한국산업은행 준법감시인 심의필 제<mark>2020-03-006</mark>호
            <br className="mobile"></br>
            <mark>(2020.03.30 ~ 2021.03.29)</mark>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Savinghigh5;
