import styles from '/styles/product/FinnqSaving.module.scss';
import Image from 'next/image';
import React, { useState, useEffect }  from 'react';

const SavingKDBXThigh5InstallmentSavings = () => {
  return (
    <article className={`${styles["saving-kdb"]} contents-details`}>
        <div className={`${styles["visual"]} contents-visual`}>
            <p className="visual-title">
                상식을 뛰어넘는
                <br/>
                <span class="cl_r">
                    최대{" "}
                <em>
                  연 <mark>5.0%</mark>
                </em>{" "}
                        자유적금
              </span>
            </p>

            <dl className={`pt-17`}>
                <dt className={styles["guide-title"]}>가입정보</dt>
                <dd className={`${styles["guide-desc"]} pt-17`}>
                    <ul>
                        <li>
                            <strong>가입 기간</strong>
                            <p><mark>1</mark>년, <mark>2</mark>년</p>
                        </li>
                        <li>
                            <strong>가입 금액</strong>
                            <p>매월 <mark>1</mark>만원 ~ 최대 <mark>20</mark>만원까지</p>
                        </li>
                    </ul>
                </dd>


                <div className={`${styles["compare--btn-wrap"]} app-down`}>
                    <a href="#none" className="btn btn-google">
                        <span>Google Play</span>
                    </a>
                    <a href="#none" className="btn btn-apple">
                        <span>App Store</span>
                    </a>
                </div>
            </dl>
        </div>
        <section className="desc-wrap" >
            <div className="item-desc" style={{display:'block'}}>
                <article className="desc-info">
                    <p className="sub-title">
                        핀크라서 가능한 <br className="mobile"/><span className="mobile"> </span>최대 연 5.0% 적금 금리
                    </p>
                    <p className="sub-desc">
                        세전 20.03.30 기준
                        <br className="mobile"/><span className="mobile"> </span>
                        적금은 우대금리 조건 충족으로 우대이율 최대 연 3.0% 적용 시
                    </p>
                </article>
                <article >
                    <p className="finnq_5kdbsavings-title">KDB <em>X</em> T high5 적금</p>
                    <ul className="list">
                        <li className={`${styles['bgImageT']}`}>
                            <div >
                                <dl>
                                    <dt>연 <mark>2.0%</mark> 기본금리<em className="txt">(세전)</em></dt>
                                    <dd>
                                        <mark>17</mark>
                                        세 이상 <mark>SKT</mark> 고객 누구나!
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        <li className={`${styles['bgImageV']}`} >
                            <div >
                                <dl>
                                    <dt>연 <mark>2.0%</mark> 우대금리 I<em className="txt">(세전)</em></dt>
                                    <dd>KDB 산업은행 마케팅 활용 동의<br/>및 만기까지 <mark>SKT</mark> 회선 유지 시</dd>
                                </dl>
                            </div>
                        </li>
                        <li className={`${styles['bgImageV']}`}>
                            <div >
                                <dl>
                                    <dt>연 <mark>1.0%</mark> 우대금리 II<em className="txt">(세전)</em></dt>
                                    <dd>적금 만기까지<br/>
                                        <mark>SKT 5</mark>
                                        만원 이상 요금제 이용<br/>또는 통신비 자동이체 유지 시</dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
        <section className="desc-wrap">
            <div className="item-desc">
                <article className="desc-info">
                    <p className="sub-desc">
                        ※ 한국산업은행 준법감시인 심의필 제2020-03-006호 <br className="mobile"/><span className="mobile"> </span>(2020.03.30 ~ 2021.03.29)
                    </p>
                </article>
            </div>
        </section>

    </article>
  );
};

export default SavingKDBXThigh5InstallmentSavings;
