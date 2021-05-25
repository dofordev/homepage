import Layout from "/components/Layout";
import styles from "/styles/insurance/FinnqInsurance.module.scss";

export default function FinnqInsurance() {
  return (
    <Layout>
      <section className="container">
        <article className="key-visual product">
          <div className="inner">
            <p className="title">차별화된 금융상품</p>
            <p className="desc">
              오직 핀크에서만 누릴 수 있는 특별한 금융상품을 만나보세요!
            </p>
          </div>
        </article>

        <div className="contents">
          <section className="contents-head">
            <p className="title">보험 맞춤 추천</p>
            <em className="desc">
              오직 핀크에서만 누릴 수 있는 특별한 금융상품
            </em>
          </section>

          <section className="contents-body" id="insurance">
            <article className={`${styles["insurance"]} contents-details`}>
              <div className={`${styles["visual"]} contents-visual`}>
                <p className="visual-title">
                  한 치 앞도<br className="mobile"></br> 모르는 인생<br></br>
                  내게 꼭 맞는<br className="mobile"></br> 보험 찾기!
                </p>

                <dl className={`${styles["insurance-list"]} definition-list`}>
                  <dt>추천방식</dt>
                  <dd>
                    국내 유일의 분석, 매칭 알고리즘을 보유한 마이리얼플랜의 분석
                    시스템으로 추천합니다.
                  </dd>
                </dl>
              </div>

              <section className="desc-wrap">
                <div className="item-desc top">
                  <article className="desc-info">
                    <p className="sub-title">
                      20만명 빅데이터 기반으로<br></br>꼭 필요한 보험만 추천!
                    </p>
                    <p className="sub-desc">
                      10명의 고객 중 9.4명이 추천 결과에 만족
                    </p>
                    <div className="img-wrap">
                      <img
                        src="/images/product/insurance/img_insurance1.png"
                        alt=""
                      ></img>
                    </div>
                  </article>
                  <article className="desc-info img-content">
                    <p className="sub-title">
                      원하는 보험군만 골라서<br></br>원하는 가격대로 설정!
                    </p>
                    <p className="sub-desc">
                      총 203,476명의 고객이<br></br>매월 불필요한 보험료
                      15,376원 절감
                    </p>
                    <div className="img-wrap">
                      <img
                        src="/images/product/insurance/img_insurance2.png"
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
                      정보를 쉽게 제공하고,<br></br>전문가의 무료 설명까지!
                    </p>
                    <p className="sub-desc">
                      궁금한 것 부담 없이 물어보면서<br></br> 나에게 딱 맞는
                      플랜 설계
                    </p>
                  </article>
                  <article className="desc-info">
                    <div className="img-wrap">
                      <img
                        src="/images/product/insurance/img_insurance3.png"
                        alt=""
                      ></img>
                    </div>
                  </article>
                </div>
              </section>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
}
