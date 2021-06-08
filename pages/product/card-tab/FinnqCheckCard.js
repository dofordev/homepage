import styles from "/styles/product/FinnqCard.module.scss";

function FinnqCheckCard(){

    return (
        <article className={`${styles["finnq-check-card-wrap"]} contents-details`}>
            <section className={`${styles["visual1"]} contents-visual`}>
                <p className="">핀크 체크카드</p>
                <p className="visual-title mt-16">
                    체크카드의 <br className="mobile" />새로운 기준
                    <br />실시간 2%적립
                </p>
                <p className={`${styles["txt-desc"]} pt-29`}>연회비, 전월실적 없음</p>

            </section>
            <div className={`${styles["background-wrap"]}`}>
                <section className={`${styles["visual2"]} contents-visual`}>
                    <h5 className="visual-title">
                        매월 최대
                        <br /><mark>13,900</mark>원 핀크머니 적립
                    </h5>
                    <p className={`${styles["txt-desc"]} pt-29`}>Wavve 카드로 wavv 직접 결제 하거나<br/>SKT 부가 서비스로 무료 이용 중인 모든 고객</p>

                    <dl className={`${styles["benefit-info"]} mt-70`}>
                        <dt className={``}><mark>40</mark>만원 이상 쓰면</dt>
                        <dd className={``}><mark>7,900</mark>원</dd>
                    </dl>
                    <dl className={`${styles["benefit-info"]} mt-32`}>
                        <dt className={``}><mark>80</mark>만원 이상 쓰면</dt>
                        <dd className={``}><mark>13,900</mark>원</dd>
                    </dl>
                </section>
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