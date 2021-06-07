import styles from '/styles/product/FinnqSaving.module.scss';
import Image from 'next/image';
import React, { useState, useEffect }  from 'react';

export default function SavingTFinnqInstallmentSavings() {

    useEffect(() => {

    }, []);

    return (
        <article className={`${styles["saving-tfinnq"]} contents-details`}>
            <div className={`${styles["visual"]} contents-visual`}>
                <p className="visual-title">
                    SKT 고객이라면,
                    <br />
                    최대 연 2.6%
                    <br />
                    <p><mark>20.04.01</mark> 현재, 세전</p>
                </p>

                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>가입정보</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>
                        <ul>
                            <li>
                                <strong>가입 기간</strong>
                                <p><mark>12</mark>개월, <mark>24</mark>개월 중 <br></br>택<mark>1</mark></p>
                            </li>
                            <li>
                                <strong>가입 금액</strong>
                                <p><mark>5</mark>만원, <mark>10</mark>만원, <mark>15</mark>만원 중 <br></br>택<mark>1</mark></p>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
            <section className="desc-wrap" style={{clear:'both'}}>
                <div className="item-desc">
                    <article className="desc-info">
                        <p className="sub-title">
                            하나은행 T핀크적금
                        </p>
                        <p className="sub-desc">
                            <span><em>연 <mark>1.6</mark>%</em> 기본금리</span><br></br>
                            <span><mark>SKT</mark> 이동통신비 자동이체 시</span><br className="mobile"></br><span className="mobile"> </span>
                            <span><em>연 <mark>1.0%</mark></em> 우대금리 제공</span>
                        </p>
                        <p className="sub-desc">
                            20.04.01 현재, 세전
                        </p>
                    </article>
                    <article className="sub-desc">
                        <div className="img-wrap">
                            <img
                                src="/images/product/saving/saving-tfinnqinstallmentsavings/img_finnq_savings01.png"
                                alt="기본금리 연 1.6%, 우대금리 연1.0%, 총 금리최대 연 2.60% (SKT 이동통신비 자동이체 시)"
                            ></img>
                        </div>
                    </article>

                </div>
            </section>
            <section className="desc-wrap">
                <div className="item-desc">
                    <article className="desc-info">
                        <p className="sub-desc">
                            ※ 본 홍보물은 2021년 2월 28일까지 유효합니다.<br></br>
                            ※ 하나은행 준법감시인 심사필 2020-광고-1841호 <br className="mobile"></br><span className="mobile">  </span>(2020.03.30)
                        </p>
                    </article>
                </div>
            </section>

        </article>
    );
}
