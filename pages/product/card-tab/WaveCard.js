import styles from "/styles/product/FinnqCard.module.scss";


export default function WaveCard(){
    return (
        <article className={`${styles["wave-card-wrap"]} contents-details`}>
            <section className={`${styles["visual"]} contents-visual`}>
                <h4 className="visual-title">
                    웨이브 구독만 하면
                    <br />누구나 파도치는
                    <br />혜택!
                </h4>
                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>연회비</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>국내전용<div className={`${styles["price"]} mt-6`}>18,000원</div></dd>
                    <dd className={`${styles["guide-desc"]} pt-5`}>국내외겸용(Master Card)<div className={`${styles["price"]} ${styles["master-card"]} mt-6`}>20,000원</div></dd>

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