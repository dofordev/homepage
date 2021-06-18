import styles from "/styles/product/FinnqCard.module.scss";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/bundle';

export default function FinnqHanaCard(){

    useEffect(() => {


        const swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,   //데스크탑 커서 지원
            centeredSlides: true, // true시에 슬라이드가 가운데로 배치
            spaceBetween: 50, // 슬라이드 사이 여백
            slidesPerView: 'auto', // 한 슬라이드에 보여줄 갯수
            direction: 'horizontal',
            loop: true,
            autoplay : {
                delay : 2000,
                disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            },
            speed : 600,
            coverflowEffect: { // 커버플로우 설정
                rotate: 0, // 슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
                stretch: 0, // 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
                depth: 270, // 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
                modifier: 1, // 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
                slideShadows : false, // 슬라이더 그림자 : 3D 효과를 강조하기 위한 회전시 흐릿한 효과
            },
            slideToClickedSlide:false, // true시 해당 슬라이드 클릭시 슬라이드 위치로 이동
        });

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
                <div className={`${styles["visual2"]} item-desc`} >
                    <section className={`desc-info`}>
                        <h4 className={`${styles["visual-title"]} visual-title`}>
                            내 소비생활의 중심<br />
                            <span className={`txt-purple`}>핀크계좌 + 핀크카드</span>
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-33`}>핀크계좌에 쓸 만큼만 채우고<br className={`mobile`}/> 핀크카드로 계획적인 소비하자!</p>
                        <div className={`${styles["img1-wrap"]}`}>
                            <Image
                            src="/images/product/card/finnq-card/img-finnqcard-collabo1.png"
                            alt="핀크계좌 + 핀크카드"
                            width={400}
                            height={225}/>
                        </div>
                        <div className={`${styles["auto-charge-info-wrap"]}`}><p className={`${styles["auto-charge-info"]}`}>자동충전 결제 기능을 이용하면, 결제 시 핀크계좌잔액이 부족하더라도<br/>핀크계좌를 자동으로 충전하여 바로 결제할 수 있습니다.</p></div>
                    </section>
                    <div className={`${styles["img2-wrap"]}`}>
                        <Image
                            src="/images/product/card/finnq-card/ico_plus.png"
                            alt="더하기"
                            width={50}
                            height={50}/>
                    </div>
                    <section className={"desc-info"}>
                        <h4 className={`${styles["visual-title"]} visual-title`}>
                            AI핀고의
                            <span className={`txt-purple`}>정확한 소비 분석</span>
                        </h4>
                        <p className={`${styles["txt-desc"]} mt-29 mb-65`}>은행 / 카드사 연결 없이도<br className={`mobile`}/> 정확하고 똑똑한<br className={`${styles["mobile-hide"]}`} />소비 분석이 가능</p>
                        <div className={`${styles["img3-wrap"]}`}>
                            <Image
                                src="/images/product/card/finnq-card/img-finnqcard-collabo2.png"
                                alt="탁월, 우수, 평균, 주의필요, 경고의 5단 단계 중 2단계인 우수."
                                width={400}
                                height={215}/>
                        </div>
                    </section>

                </div>

            </div>
            <div className="desc-wrap">
                <div className="item-desc">
                    <section className={"desc-info"}>
                        <h4 className={`${styles["visual-title"]} visual-title`}>
                            <span className={`txt-purple`}>디자인 선택</span>의 즐거움<br/>
                            망설이다 품절주의!
                        </h4>
                        <p className={`${styles["txt-desc"]} pt-15`}>핀크에만 있는 한정판 디자인</p>

                        <dl className={`${styles["mobile-hide"]} pt-60`}>
                            <dd className={`${styles["card-desc"]} txt-black`}>핀크카드는 1인당 1개만 발급 가능합니다.</dd>
                            <dd className={`${styles["card-desc"]}`}>핀크카드 디자인을 변경하려면 하나카드 고객센터(1800-1111)에서<br/>사용하던 카드를 해지하고 재신청해야 합니다.</dd>
                        </dl>

                    </section>
                    <div className={`${styles["swiper-container"]} swiper-container`}>
                        <div className="swiper-wrapper">
                            <div className={`${styles["swiper-slide"]} swiper-slide`}>
                                <div className={`${styles["item"]}`}>
                                    <img src="/images/product/card/finnq-card/img_finnq_card1.png" />
                                    <span className={`${styles["stit"]}`}>소비를부탁해</span>
                                </div>
                            </div>
                            <div className={`${styles["swiper-slide"]} swiper-slide`}>
                                <div className={`${styles["item"]}`}>
                                    <img src="/images/product/card/finnq-card/img_finnq_card2.png" />
                                    <span className={`${styles["stit"]}`}>긁을 때면 난 울어</span>
                                </div>
                            </div>

                            <div className={`${styles["swiper-slide"]} swiper-slide`}>
                                <div className={`${styles["item"]}`}>
                                    <img src="/images/product/card/finnq-card/img_finnq_card3.png" />
                                    <span className={`${styles["stit"]}`}>넌 감자칩 난 IC칩</span>
                                </div>
                            </div>
                            <div className={`${styles["swiper-slide"]} swiper-slide`}>
                                <div className={`${styles["item"]}`}>
                                    <img src="/images/product/card/finnq-card/img_finnq_card2-1.png" />
                                    <span className={`${styles["stit"]}`}>하늘 절미</span>
                                </div>
                            </div>
                            <div className={`${styles["swiper-slide"]} swiper-slide`}>
                                <div className={`${styles["item"]}`}>
                                    <img src="/images/product/card/finnq-card/img_finnq_card3-1.png" />
                                    <span className={`${styles["stit"]}`}>분홍 절미</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <dl className={`${styles["cont-wrap"]} ${styles["mobile-show"]} ${styles["hide"]} pt-60`}>
                        <dd className={`${styles["card-desc"]} txt-black`}>핀크카드는 1인당 1개만 발급 가능합니다.</dd>
                        <dd className={`${styles["card-desc"]}`}>핀크카드 디자인을 변경하려면 하나카드 고객센터(1800-1111)에서<br/>사용하던 카드를 해지하고 재신청해야 합니다.</dd>
                    </dl>
                    <section className={`${styles["mobile-hide"]} desc-info`}>
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
                        <h4 className={`${styles["visual-title"]} visual-title`}>
                            이용 실적에 따라 최대 <span className={`txt-purple`}>1%</span> 적립
                        </h4>
                        <p className={`${styles["txt-desc"]} pt-15`}>적립된 만큼 핀크계좌로 캐시백 받고<br/>30% 연말정산 혜택은 덤!</p>
                        <dl className={`${styles["mobile-hide"]} pt-100`} >
                            <dd className={`${styles["card-desc"]}`}>실적체크 기간: 1일~말일</dd>
                            <dd className={`${styles["card-desc"]}`}>핀크계좌 캐시백: 익월 10영업일 이내</dd>
                            <dd className={`${styles["card-desc"]}`}>백화점, 마트 등 자체 상품권 발행 가맹점에서는 카드 사용이 제한될 수 있습니다.</dd>
                        </dl>
                    </section>
                    <section className={"desc-info"}>
                        <div className={`${styles["img4-wrap"]}`}>
                            <Image
                                src="/images/product/card/finnq-card/img_card_graph4.png"
                                alt="10만원 이상 : 0.3%, 30만원 이상 :0.5%, 50만원 이상 : 1.0%"
                                width={400}
                                height={270}/>
                        </div>
                    </section>
                </div>
                <dl className={`${styles["mobile-show"]} ${styles["hide"]} pt-20 pl-20`} >
                    <dd className={`${styles["card-desc"]}`}>실적체크 기간: 1일~말일</dd>
                    <dd className={`${styles["card-desc"]}`}>핀크계좌 캐시백: 익월 10영업일 이내</dd>
                    <dd className={`${styles["card-desc"]}`}>백화점, 마트 등 자체 상품권 발행 가맹점에서는 카드 사용이 제한될 수 있습니다.</dd>
                </dl>
                <dl className={`${styles["deli-wrap"]}`}>
                    <dd className={`${styles["deli-txt"]}`}>※ 하나카드 준법심의 19-0393<br className={`mobile`} /> (2019.03.21~2020.03.20)</dd>
                </dl>
            </div>
        </article>
    )
}