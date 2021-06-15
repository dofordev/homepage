import styles from "/styles/product/FinnqSaving.module.scss";

export default function SavingHabit() {
  return (
    <article className={`${styles["saving-habit"]} contents-details`}>
      <div className={`${styles["visual"]} contents-visual`}>
        <p className="visual-title">
          습관이 돈이
          <br />
          되는 방법
        </p>
        <dl
          className={`${styles["saving-habit--desc"]} ${styles["saving-common--desc"]} definition-list`}
        >
          <dt>습관저금이란?</dt>
          <dd>
            자주 소비하는 카테고리를 지정하면, 해당 카테고리 카드 결제 시
            <br className="web"></br>
            핀크머니에서 습관저금으로 자동 저금
          </dd>
        </dl>
      </div>
      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">
              쓰면서 모으는 <br />
              나만의 맞춤 저금 트레이닝
            </p>
          </article>
          <article className="desc-info">
            <div className="img-wrap">
              <img
                src="/images/product/saving/saving-habit/img_habit_saving2.png"
                alt="소비습관 지정 - 쌓이는 습관 저금 잔고 - 카드 결재 시"
              ></img>
            </div>
          </article>
        </div>
      </section>
      <section className="desc-wrap">
        <div className="item-desc">
          <article className="desc-info">
            <p className="sub-title">습관저금 만들기</p>
            <div className={styles["step-list--guide"]}>
              <ul className={styles["step-list"]}>
                <li>자주쓰는 카드 연결</li>
                <li>
                  6가지 습관 중 나의 소비 스타일에 맞는 카테고리 선택
                  <div className={styles["img-info"]}>
                    <img
                      src="/images/product/saving/saving-habit/img_habit_saving3-2.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  결제할 때마다 자동으로 저금할 금액을 설정
                  <div className={styles["img-info"]}>
                    <img
                      src="/images/product/saving/saving-habit/img_habit_saving3-3.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  설정한 카테고리에서 결제하면
                  <br />
                  핀크머니에서 습관저금으로 자동 저금
                </li>
              </ul>
            </div>
          </article>
          <article className={"desc-info"}>
            <div className="img-wrap">
              <img
                src="/images/product/saving/saving-habit/img_habit_saving3-1.png"
                alt=""
              />
            </div>
          </article>
        </div>
      </section>
    </article>
  );
}
