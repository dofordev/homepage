import React from "react";
import styles from "../../../styles/product/FinnqLoan.module.scss";

const LoanComparePage = () => {
  return (
    <article className={`${styles["loan-compare"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className="visual-title">
          같은 상품을 <br className="mobile"></br>다른 금리로 제공하는
          <br></br>대출 비교 서비스
        </p>
        <div className={styles["inner-box"]}>
          <p scope="row" className={styles["text-wrap"]}>
            <span className={styles.text}>
              신용도에 영향없이 한번에 조회 가능
            </span>
            <a
              href="https://loan.finnq.com/intro/finnq?pcn=WEB_Bridge"
              target="_blank"
              className={styles["btn-loan"]}
            >
              대출 금리 비교하러 가기 <em className={styles.arrow}>&gt;</em>
            </a>
          </p>

          <div className={`${styles["compare--btn-wrap"]} app-down`}>
            <a href="#none" className="btn btn-google">
              <span>Google Play</span>
            </a>
            <a href="#none" className="btn btn-apple">
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>

      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">
              조회 한번으로 <br></br>여러 금융사의 대출조건을
              <br></br>한번에 확인
            </p>
            <p className="sub-desc">
              핀크 T스코어 활용 시<br></br>최대 1.0% 금리할인 혜택
            </p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-compare/img_market_loantscore.png"
                alt="T앱(5%), B앱(5%), 핀크(??) T스코어 혜택, P앱(5%)"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">
              서류, 방문 필요없이<br></br>모바일로 조회부터 약정까지
            </p>
            <p className="sub-desc">공인인증서가 없어도 간편하게 조회 가능</p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-compare/img_market_loantscorephone.png"
                alt="Finnq 조회 이미지"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">
              스팸 전화나 문자없이<br></br>간편하게 대출 신청 가능
            </p>
            <p className="sub-desc">공인인증서가 없어도 간편하게 조회 가능</p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/loan/loan-compare/img_market_loantscoreinfo.png"
                alt="스팸전화,문자 X, 선택한 금융기관만 정보 제공"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="width-fix">
          <p className={styles["finance-title"]}>제휴 금융기관 안내</p>
        </div>

        <div className={`${styles["finance-list--wrap"]} item-desc`}>
          <div className={styles["table-box"]}>
            <table className={styles["finance-list"]}>
              <caption>
                금융기관 안내에 관한 내용으로, 계약금융회사, 계약일, 연락처등
                순으로 표시되어있습니다.
              </caption>
              <colgroup>
                <col className={styles.col1}></col>
                <col className={styles.col2}></col>
                <col className={styles.col3}></col>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loankjbk.png"
                        alt="광주은행 CI"
                      ></img>
                    </span>
                    광주은행
                  </th>
                  <td>2019.09.25</td>
                  <td>
                    <a href="tel:1577-3800">1577-3800</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanhkbk.png"
                        alt="한국투자저축은행 CI"
                      ></img>
                    </span>
                    한국투자저축은행
                  </th>
                  <td>2019.10.30</td>
                  <td>
                    <a href="tel:1588-3388">1588-3388</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanwbck.png"
                        alt="웰컴저축은행 CI"
                      ></img>
                    </span>
                    웰컴저축은행
                  </th>
                  <td>2019.11.01</td>
                  <td>
                    <a href="tel:1661-0001">1661-0001</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanctbk.png"
                        alt="한국씨티은행 CI"
                      ></img>
                    </span>
                    한국씨티은행
                  </th>
                  <td>2019.12.23</td>
                  <td>
                    <a href="tel:1588-7000">1588-7000</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanegbk.png"
                        alt="유진저축은행 CI"
                      ></img>
                    </span>
                    유진저축은행
                  </th>
                  <td>2020.02.20</td>
                  <td>
                    <a href="tel:1600-1482">1600-1482</a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loannsbk.png"
                        alt="NH저축은행 CI"
                      ></img>
                    </span>
                    NH저축은행
                  </th>
                  <td>2020.06.30</td>
                  <td>
                    <a href="tel:1566-9574">1566-9574</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanasbk.png"
                        alt="애큐온저축은행 CI"
                      ></img>
                    </span>
                    애큐온저축은행
                  </th>
                  <td>2020.09.28</td>
                  <td>
                    <a href="tel:1688-0119">1688-0119</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanjwbk.png"
                        alt="JB우리캐피탈 CI"
                      ></img>
                    </span>
                    JB우리캐피탈
                  </th>
                  <td>2020.11.16</td>
                  <td>
                    <a href="tel:1688-8700">1688-8700</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles["table-box"]}>
            <table className={styles["finance-list"]}>
              <caption>
                금융기관 안내에 관한 내용으로, 계약금융회사, 계약일, 연락처등
                순으로 표시되어있습니다.
              </caption>
              <colgroup>
                <col className={styles.col1}></col>
                <col className={styles.col2}></col>
                <col className={styles.col3}></col>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanokbk.png"
                        alt="OK저축은행 CI"
                      ></img>
                    </span>
                    OK저축은행
                  </th>
                  <td>2019.10.25</td>
                  <td>
                    <a href="tel:1800-8282">1800-8282</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loansmbk.png"
                        alt="스마트저축은행 CI"
                      ></img>
                    </span>
                    스마트저축은행
                  </th>
                  <td>2019.09.27</td>
                  <td>
                    <a href="tel:1800-6000">1800-6000</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanjcbk.png"
                        alt="JT친애저축은행 CI"
                      ></img>
                    </span>
                    JT친애저축은행
                  </th>
                  <td>2019.12.12</td>
                  <td>
                    <a href="tel:1544-9191">1544-9191</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanksbk.png"
                        alt="KB저축은행 CI"
                      ></img>
                    </span>
                    KB저축은행
                  </th>
                  <td>2020.01.17</td>
                  <td>
                    <a href="tel:1899-0900">1899-0900</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanknbk.png"
                        alt="BNK경남은행 CI"
                      ></img>
                    </span>
                    BNK경남은행
                  </th>
                  <td>2020.03.04</td>
                  <td>
                    <a href="tel:1661-0001">1661-0001</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loandgbk.png"
                        alt="DGB대구은행 CI"
                      ></img>
                    </span>
                    DGB대구은행
                  </th>
                  <td>2020.09.01</td>
                  <td>
                    <a href="tel:1566-5050">1566-5050</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanssbk.png"
                        alt="신한저축은행 CI"
                      ></img>
                    </span>
                    신한저축은행
                  </th>
                  <td>2020.10.01</td>
                  <td>
                    <a href="tel:1644-7777">1644-7777</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className={styles["ico-bank"]}>
                      <img
                        src="/images/product/loan/loan-compare/ico_loanbcbk.png"
                        alt="BNK캐피탈 CI"
                      ></img>
                    </span>
                    BNK캐피탈
                  </th>
                  <td>2020.11.16</td>
                  <td>
                    <a href="tel:1577-2280">1577-2280</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </article>
  );
};

export default LoanComparePage;
