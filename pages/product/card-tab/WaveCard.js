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

            <section className={`${styles["visual3"]} contents-visual`}>
                <h6 className="visual-title">
                    커피 브랜드 <mark>5%</mark> 청구할인
                </h6>
                <dl className={`${styles["benefit-info"]} mt-40`}>
                    <dt className={``}><mark>40</mark>만원 이상 쓰면</dt>
                    <dd className={``}>최대<mark>5,000</mark>원 청구할인</dd>
                </dl>
            </section>
            <div className={`${styles["background-wrap"]}`}>
                <section className={`${styles["info-wrap"]} contents-visual`}>
                    <div className={`${styles["card--info__guide"]}`}>
                        <p className={`${styles["txt"]}`}>wavve 카드 5만원 캐시백 이벤트 상세</p>
                        <div className={`${styles["card__guide"]}`}>
                            <dl>
                                <dt>기간</dt>
                                <dd>2021.1.15 ~ 2.28</dd>
                            </dl>
                            <dl>
                                <dt>이벤트 내용</dt>
                                <dd>핀크앱 이벤트 페이지에서 응모 후, wavve카드로 3.15일까지 5만원 이상 이용 시 결제 계좌로 5만원 캐시백</dd>
                                <dd>
                                    <ul>
                                        <li className={`${styles["dash-type"]}`}>응모하기 미완료 시 대상에서 제외</li>
                                        <li className={`${styles["dash-type"]}`}>이벤트 직전 6개월간 (2020.7.15~2021.1.14) 하나카드(신용) 결제 이력 있는 회원
                                            제외
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>캐시백 지급 예정일</dt>
                                <dd>2021.3월 말까지 카드 결제 계좌로 지급 예정</dd>
                            </dl>
                            <dl>
                                <dt>유의사항</dt>
                                <dd>
                                    <ul>
                                        <li className={`${styles["dash-type"]}`}>본 이벤트는 본인 회원 1인 1회 참여 가능합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>본 이벤트 참여 시, 하나카드에서 진행하는 다른 유사 결제 이벤트 중복 참여가 불가합니다. (중복
                                            시 혜택 지급일 우선 건으로 적용)
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>결제 금액은 기간 내 합산이며, 교통카드(후불/충전), 하이패스, 통신요금, 아파트관리비 등
                                            무승인 매입건 및 상품권업종 / 포인트충전 이용금액, 단기카드대출(현금서비스), 장기카드대출(카드론), 해외가맹점 결제/인출 이용 금액
                                            및 연회비 납부 금액은 포함되지 않습니다. (업종 구분은 하나카드에 등록된 가맹점 기준에 따릅니다.)
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>결제 금액이 이벤트 기간 내 전표 미매입, 승인거절, 승인취소, 부분취소, 매입취소, 반품/환불
                                            등의 사유로 정상처리되지 않을 시 합산 금액에 포함되지 않습니다.
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>본 이벤트는 이벤트 직전 6개월간(2020.7.15~2021.1.14) 하나카드 신용카드
                                            결제이력(신용지킴이, 장/단기카드대출, 해외 결제/인출, 무승인매입, 하나BC카드 등 모두 포함)이 있는 본인 회원은 참여가 제한
                                            됩니다.
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>혜택제공시점에 카드 해지, 교체, 탈회, 결제 취소 시 제공이 불가합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>이벤트 대상 조건 미충족 및 유의사항 미확인 사유로 인한 혜택 예외 제공은 불가합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>자세한 내용은 하나카드 고객센터(1800-1111)로 문의바랍니다.</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="">
                            <ul className="">
                                <li className={`${styles["info-type"]} bold`}>카드별 상세혜택 및 이용조건은 카드 발급 신청 시 상품설명서 및 상품 약관을 반드시 확인하시기 바랍니다</li>
                                <li className={`${styles["info-type"]} bold`}>신용카드 남용은 가계경제에 위협이 됩니다.</li>
                                <li className={`${styles["info-type"]} bold`}>여신금융상품 이용 시 귀하의 신용등급이 하락할 수 있습니다.</li>
                                <li className={`${styles["info-type"]} bold`}>연체이자율(약정이율 + 최대 3%)은 회원별·이용상품별로 차등 적용되며, 법정 최고금리(24%)를
                                    초과하지 않습니다.
                                    <br/>단, 연체발생 시점에 약정이율이 없는 경우는 아래와 같이 적용함
                                        <ul className="">
                                            <li className="mt-8">일시불 거래 연체 시 : 거래발생 시점의 최소기간(2개월) 유이자 할부 금리</li>
                                            <li className="mt-8">무이자할부 거래 연체 시 : 거래발생 시점의 동일한 할부 계약기간의 유이자 할부 금리
                                            </li>
                                        </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <ul className="mt-40">
                                <li className={`${styles["info-type"]}`}>여신금융협회 심의필 제
                                    <mark>2020-C1a-04784</mark>
                                    호<br className="mobile"/>
                                        <mark className="">(2020.06.05)</mark></li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </article>
    )
}