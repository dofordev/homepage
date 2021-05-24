import styles from "/styles/product/FinnqCard.module.scss";
import React from "react";
import Image from "next/image";

export default function TwoPlusCard(){
    return (
        <article className={`${styles["two-plus-card-wrap"]} contents-details`}>
            <section className={`${styles["visual"]} contents-visual`}>
                <h4 className="visual-title">
                    혜택이 별거있나
                    <br />쓴 만큼 적립이
                    <br className="mobile" /> 최고지
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
                        <h4 className="visual-title">
                            기본 <span className={`txt-orange`}>1%</span> 적립
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-33`}>이용실적, 이용 횟수, 한도 제한 없이 제공</p>
                        <Image
                            src="/images/product/card/two-plus-card/img_twoplus_card01.png"
                            alt="기본 1% 적립"
                            width={400}
                            height={205}/>
                    </section>
                    <Image
                        src="/images/product/card/finnq-card/ico_plus.png"
                        alt="더하기"
                        width={50}
                        height={50}/>
                    <section className={"desc-info"}>
                        <h4 className="visual-title">
                            추가 매월 최대 <span className={`txt-orange`}>15,000</span> 적립
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-38`}>이용 실적에 따라 불어나는 캐시백</p>
                        <Image
                            src="/images/product/card/two-plus-card/img_twoplus_card02.png"
                            alt="추가 적립"
                            width={400}
                            height={270}/>
                    </section>

                </div>
            </div>
            <div className="desc-wrap">
                <h4 className="visual-title">
                    청구할인 혜택
                </h4>
                <div className="item-desc">
                    <section className={"desc-info"}>
ㅁㄴㅇ
                    </section>
                    <section className={"desc-info"}>
ㅇㅇㅇ
                    </section>
                    <section className={"desc-info"}>
ㅇㅇㅇ
                    </section>
                </div>
            </div>

        </article>
    )
}