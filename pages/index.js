import Layout from "/components/Layout";
import styles from "/styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div>
        <section>
          <div className={`${styles["main-inner"]}`}>
            <p className={`${styles["main-title"]}`}>뱅크 말고, 핀크</p>
            <p className={`${styles["main-desc"]}`}>
              앱 하나로 모든 은행계좌 거래 가능!<br></br>차별화된 금융상품과
              서비스 지금 경험해보세요!
            </p>
            <div className={`${styles["main--btn-wrap"]} app-down`}>
              <a href="#none" className={`${styles["main-btn"]} btn-google`}>
                <span>Google Play</span>
              </a>
              <a href="#none" className={`${styles["main-btn"]} btn-apple`}>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
