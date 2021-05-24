import styles from "/styles/product/FinnqCard.module.scss";

function FinnqCheckCard(){

    return (
        <article className="contents-details">
            <section className="contents-visual">
                <p className="">핀크 체크카드</p>
                <p className="visual-title">
                    체크카드의 <br className="mobile" />새로운 기준
                    <br />실시간 2%적립
                </p>
                <dl className={styles["guide-wrap"]}>
                    <dt className={styles["guide-title"]}>안내사항</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>- 연회비 무료 / 국내 전용 (할부 결제 불가능)</dd>
                    <dd className={styles["guide-desc"]}>- 수령 후 핀크 App에 등록해야 사용 가능</dd>
                </dl>
            </section>
            <div className="desc-wrap">
                <div className="item-desc">detail 1</div>
            </div>
            <div className="desc-wrap">
                <div className="item-desc">detail 2</div>
            </div>
            <div className="desc-wrap">
                <div className="item-desc">detail 3</div>
            </div>
        </article>
    )
}

export default FinnqCheckCard;