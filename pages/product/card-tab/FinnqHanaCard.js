import styles from "/styles/product/FinnqCard.module.scss";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function FinnqHanaCard(){

    useEffect(() => {

    }, []);


    return (

        <article className={`${styles["finnq-card-wrap"]} contents-details`}>
            <section className={`${styles["visual"]} contents-visual`}>
                <h4 className="visual-title">
                    쓸 만큼만 <br className="mobile" />덜어 쓰는
                    <br />소비습관의 시작
                </h4>
                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>안내사항</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>- 연회비 무료 / 국내 전용 (할부 결제 불가능)</dd>
                    <dd className={`${styles["guide-desc"]} pt-5`}>- 수령 후 핀크 App에 등록해야 사용 가능</dd>
                </dl>
            </section>
            <div className="desc-wrap">
                <div className="item-desc">
                    <section className={"desc-info"}>
                        <h4 className="visual-title">
                            내 소비생활의 중심<br />
                            <span className={`txt-purple`}>핀크계좌 + 핀크카드</span>
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-33`}>핀크계좌에 쓸 만큼만 채우고 핀크카드로 계획적인 소비하자!</p>
                        <Image
                            src="/images/product/card/finnq-card/img-finnqcard-collabo1.png"
                            alt="핀크계좌 + 핀크카드"
                            width={400}
                            height={225}/>
                        <div className={`${styles["auto-charge-info-wrap"]}`}><p className={`${styles["auto-charge-info"]}`}>자동충전 결제 기능을 이용하면, 결제 시 핀크계좌잔액이 부족하더라도<br/>핀크계좌를 자동으로 충전하여 바로 결제할 수 있습니다.</p></div>
                    </section>
                    <Image
                        src="/images/product/card/finnq-card/ico_plus.png"
                        alt="더하기"
                        width={50}
                        height={50}/>
                    <section className={"desc-info"}>
                        <h4 className="visual-title">
                            AI핀고의
                            <span className={`txt-purple`}>정확한 소비 분석</span>
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-65`}>은행 / 카드사 연결 없이도 정확하고 똑똑한<br />소비 분석이 가능</p>
                        <Image
                            src="/images/product/card/finnq-card/img-finnqcard-collabo2.png"
                            alt="탁월, 우수, 평균, 주의필요, 경고의 5단 단계 중 2단계인 우수."
                            width={400}
                            height={215}/>
                    </section>

                </div>

            </div>
            <div className="desc-wrap">
                <div className="item-desc">
                    <section className={"desc-info"}>
                        <h4 className="visual-title">
                            <span className={`txt-purple`}>디자인 선택</span>의 즐거움<br/>
                            망설이다 품절주의!
                        </h4>
                        <p className={`${styles["txt-desc"]} pt-15`}>핀크에만 있는 한정판 디자인</p>

                        <dl className={`pt-60`}>
                            <dd className={`${styles["card-desc"]} txt-black`}>핀크카드는 1인당 1개만 발급 가능합니다.</dd>
                            <dd className={`${styles["card-desc"]}`}>핀크카드 디자인을 변경하려면 하나카드 고객센터(1800-1111)에서<br/>사용하던 카드를 해지하고 재신청해야 합니다.</dd>
                        </dl>

                    </section>
                    <section className={"desc-info"}>
                        <Image
                            src="/images/product/card/finnq-card/img-finnqcard-card.png"
                            alt="긁을 때면 난 울어, 넌 감자칩 난 IC칩, 핀고, 소비를 부탁해"
                            width={588}
                            height={213.64}/>
                    </section>
                </div>
            </div>
            <div className="desc-wrap">
                <div className="item-desc">
                    <section className={"desc-info"}>
                        <h4 className="visual-title">
                            이용 실적에 따라 최대 <span className={`txt-purple`}>1%</span> 적립
                        </h4>
                        <p className={`${styles["txt-desc"]} pt-15`}>적립된 만큼 핀크계좌로 캐시백 받고<br/>30% 연말정산 혜택은 덤!</p>
                        <dl className={`pt-100`}>
                            <dd className={`${styles["card-desc"]}`}>핀크카드는 1인당 1개만 발급 가능합니다.</dd>
                            <dd className={`${styles["card-desc"]}`}>핀크카드 디자인을 변경하려면 하나카드 고객센터(1800-1111)에서<br/>사용하던 카드를 해지하고 재신청해야 합니다.</dd>
                        </dl>
                    </section>
                    <section className={"desc-info"}>
                        <Image
                            src="/images/product/card/finnq-card/img_card_graph4.png"
                            alt="10만원 이상 : 0.3%, 30만원 이상 :0.5%, 50만원 이상 : 1.0%"
                            width={400}
                            height={270}/>
                    </section>
                </div>
                <dl className={`${styles["deli-wrap"]}`}>
                    <dd className={`${styles["deli-txt"]}`}>※ 하나카드 준법심의 19-0393 (2019.03.21~2020.03.20)</dd>
                </dl>
            </div>
        </article>
    )
}