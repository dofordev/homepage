import styles from "/styles/product/FinnqCard.module.scss";
import Image from "next/image";
import React from "react";


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
                <div className="item-desc">
                    <section className={"desc-info"}>
                        <h5 className="visual-title">
                            매월 최대<br/>
                            <mark>13,900</mark>원
                            핀크머니 적립
                        </h5>
                        <p className={`${styles["txt-desc"]} pt-29`}>Wavve 카드로 wavv 직접 결제 하거나<br/>SKT 부가 서비스로 무료 이용 중인 모든 고객</p>
                        <dl className={`pt-100`}>
                            <dd className={`${styles["card-desc"]}`}>핀크카드는 1인당 1개만 발급 가능합니다.</dd>
                            <dd className={`${styles["card-desc"]}`}>핀크카드 디자인을 변경하려면 하나카드 고객센터(1800-1111)에서<br/>사용하던 카드를 해지하고 재신청해야 합니다.</dd>
                        </dl>
                    </section>
                    <section className={"desc-info"}>
                        <Image
                            src="/images/product/card/wave-card/img_wavve_visual2.png"
                            alt=""
                            width={450}
                            height={500}/>
                    </section>
                </div>
                <dl className={`${styles["deli-wrap"]}`}>
                    <dd className={`${styles["deli-txt"]}`}>※ 하나카드 준법심의 19-0393 (2019.03.21~2020.03.20)</dd>
                </dl>
            </div>
            <section className={`${styles["visual"]} contents-visual`}>
                <h6 className="visual-title">
                    커피 브랜드 <mark>5%</mark> 청구할인
                </h6>
                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>연회비</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>국내전용<div className={`${styles["price"]} mt-6`}>18,000원</div></dd>
                    <dd className={`${styles["guide-desc"]} pt-5`}>국내외겸용(Master Card)<div className={`${styles["price"]} ${styles["master-card"]} mt-6`}>20,000원</div></dd>

                </dl>
            </section>
        </article>
    )
}