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
                <div className={`${styles["visual2"]} item-desc`}>
                    <section className={"desc-info"}>
                        <h4 className={`${styles["visual-title"]} visual-title`}>
                            기본 <span className={`txt-orange`}>1%</span> 적립
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-33`}>이용실적, 이용 횟수, 한도 제한 없이 제공</p>
                        <div className={`${styles["img1-wrap"]}`}>
                            <Image
                                src="/images/product/card/two-plus-card/img_twoplus_card01.png"
                                alt="기본 1% 적립"
                                width={400}
                                height={205}/>
                        </div>
                    </section>
                    <div className={`${styles["img2-wrap"]}`}>
                        <Image
                            src="/images/product/card/finnq-card/ico_plus.png"
                            alt="더하기"
                            width={50}
                            height={50}/>
                    </div>
                    <section className={`${styles["desc-info"]} desc-info`}>
                        <h4 className={`${styles["visual-title"]} visual-title`}>
                            추가 매월 최대 <span className={`txt-orange`}>15,000</span> 적립
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-38`}>이용 실적에 따라 불어나는 캐시백</p>
                        <div className={`${styles["img3-wrap"]}`}>
                            <Image
                                src="/images/product/card/two-plus-card/img_twoplus_card02.png"
                                alt="추가 적립"
                                width={400}
                                height={270}/>
                        </div>
                    </section>

                </div>
            </div>
            <div className="desc-wrap">
                <div className={`item-desc`}>
                    <h4 className={`${styles["visual-title"]} visual-title`}>
                        청구할인 혜택
                    </h4>
                </div>
                <div className={`${styles["center-wrap"]} mt-36 mb-79`}>
                    <div className={`${styles["visual3"]} item-desc`}>

                        <section className={"desc-info"}>
                            <div className={`${styles["benefit-wrap"]} ${styles["benefit-movie"]}`}>
                                <dl>
                                    <dt>영화 <mark>3,000</mark>원 할인</dt>
                                    <dd><mark>CGV</mark>, 메가박스, 롯데시네마</dd>
                                </dl>
                            </div>
                        </section>
                        <section className={"desc-info"}>
                            <div className={`${styles["benefit-wrap"]} ${styles["benefit-coffee"]}`}>
                                <dl>
                                    <dt>커피전문점 <mark>5%</mark> 할인</dt>
                                    <dd>스타벅스, 커피빈, 엔제리너스,<br />
                                        할리스커피, 카페베네
                                    </dd>
                                </dl>
                            </div>
                        </section>
                        <section className={"desc-info"}>
                            <div className={`${styles["benefit-wrap"]} ${styles["benefit-restaurant"]}`}>
                                <dl>
                                    <dt>패밀리 레스토랑<br /><mark>10%</mark> 할인</dt>
                                    <dd>아웃백, <mark>TGIF</mark></dd>
                                </dl>
                            </div>
                        </section>
                    </div>
                    <dl className={`${styles["deli-wrap"]}`}>
                        <dd className={`${styles["deli-txt"]}`}>※ 준법심의 19-0397 (2019.03.21 ~ 2020.03.20)</dd>
                        <dd className={`${styles["deli-txt"]} mt-6`}>※ 여신금융협회 심의필 제 2019-C1h-02558호<br className={`mobile`}/>(2019.03.28)</dd>
                    </dl>
                </div>
            </div>

        </article>
    )
}