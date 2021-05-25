import Layout from "/components/Layout";
import styles from "/styles/cert/FinnqCert.module.scss";

export default function FinnqCert() {
  return (
    <Layout>
      <section className="container">
        <article className="key-visual">
          <div className="inner">
            <p className="title">뱅크 말고, 핀크</p>
            <p className="desc">
              차별화된 금융상품과 서비스 지금 경험해보세요!
            </p>
          </div>
        </article>

        <div className="contents pages">
          <section className="contents-head">
            <p className="title">공동인증센터</p>
            <em className="desc">
              공동인증서(구 공인인증서)를 핀크앱에 복사하세요
            </em>
          </section>

          <section className="contents-body">
            <article className={`${styles["cert"]} contents-details`}>
              <div className="width-fix">
                <p className={styles["sub-title"]}>공동인증서 복사 방법</p>
                <ol className={styles["step-list"]}>
                  <li>
                    <span className={styles["nums"]}>1</span>
                    <p className={styles["means"]}>
                      Finnq앱에서 ‘더보기 - 인증 및 보안 &gt; 공동인증서 관리(구
                      공인인증서) &gt; 공동인증서 가져오기’ 선택
                    </p>
                    <div className={styles["cert-images"]}>
                      <ul>
                        <li>
                          <img
                            src="/images/cert/img_finnq_cert1.png"
                            alt="인증 및 보안"
                          ></img>
                        </li>
                        <li>
                          <img
                            src="/images/cert/img_finnq_cert2.png"
                            alt="공동인증서 관리(구 공인인증서)"
                          ></img>
                        </li>
                        <li>
                          <img
                            src="/images/cert/img_finnq_cert3.png"
                            alt="공동인증서 가져오기"
                          ></img>
                        </li>
                        <li>
                          <img
                            src="/images/cert/img_finnq_cert4.png"
                            alt="인증번호 확인"
                          ></img>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className={styles["nums"]}>2</span>
                    <p className={styles["means"]}>
                      우측 ‘공동인증서 복사하기’ 버튼 클릭
                    </p>
                    <a href="#none" onclick="certificateBtn();">
                      <button type="button" className={styles["g-btn"]}>
                        공동인증서 복사하기
                      </button>
                    </a>
                  </li>
                  <li>
                    <span className={styles["nums"]}>3</span>
                    <p className={styles["means"]}>
                      공동인증서 비밀번호 입력 후 Finnq앱에서 제공하는
                      인증번호를 PC에 입력
                    </p>
                  </li>
                  <li>
                    <span className={styles["nums"]}>4</span>
                    <p className={styles["means"]}>공동인증서 복사 완료​</p>
                  </li>
                </ol>
              </div>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
}
