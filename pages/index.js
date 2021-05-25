import Layout from "/components/Layout";
import styles from "/styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <section className="key-visual">
          <div className="inner wide">
            <p className={`${styles["main-title"]} title`}>뱅크 말고, 핀크</p>
            <p className={`${styles["main-desc"]} desc`}>
              앱 하나로 모든 은행계좌 거래 가능!<br></br>차별화된 금융상품과
              서비스 지금 경험해보세요!
            </p>
            <div className="btn-wrap app-down">
              <a href="#" className="btn-google">
                <span>Google Play</span>
              </a>
              <a href="#" className="btn-apple">
                <span>App Store</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
