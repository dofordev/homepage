import styles from '/styles/product/FinnqSaving.module.scss';
import Image from 'next/image';
import React, { useState, useEffect }  from 'react';

const SavingTProfitPassbook = () => {
    return (
        <article className={`${styles["saving-tprofit"]} contents-details`}>
            <div className={`${styles["visual"]} contents-visual`}>
                <p className="visual-title">
                    매월 이자가 늘어나는
                    <br />
                    T이득통장!
                    <br />
                    <p className="guide">예시) 세전, <mark>200</mark>만원, <mark>’20.06.15</mark> 입금 기준, <mark>24</mark>개월,<br className="moblie" /> 우대금리 최대 적용 시</p>
                </p>

                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>가입정보</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>
                        <ul>
                            <li>
                                <strong>가입 조건</strong>
                                <p>SKT 통신사 이용자</p>
                            </li>
                            <li>
                                <strong>금리 조건</strong>
                                <p><mark>200</mark>만원 한도 최대 연 <mark>2.0%</mark></p>
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
            <section className="desc-wrap">
                <div className="item-desc">
                    <article className="desc-info">
                        <h6>SKT 고객이라면,<br/> <span className="txt-purple">최대 연 <mark>2%</mark></span> 금리!</h6>
                        <p className="thumb-guide">(세전, 200만원 한도, ’20.06.15 기준,<br/> 우대금리 최대 적용 시)</p>

                        <div className="benefit-detail">
                            <dl>
                                <dt>기본금리 연 <mark>1.0%</mark></dt>
                                <dd>만 <mark>17</mark>세 이상 SKT 고객 누구나!</dd>
                            </dl>

                            <dl>
                                <dt>우대금리 연 <mark>1.0%</mark></dt>
                                <dd>KDB산업은행 마케팅 이용 동의 시</dd>
                            </dl>
                        </div>
                    </article>
                    <article className="sub-desc">
                        <div className="img-wrap">
                            <img
                                src="/images/product/saving/saving-tprofitpassbook/img_finnq_pla2.png"
                                alt="기본금리 연 1.6%, 우대금리 연1.0%, 총 금리최대 연 2.60% (SKT 이동통신비 자동이체 시)"
                            ></img>
                        </div>
                    </article>
                </div>
                <div className="guide-txt">
                  <p className="dash_type">KDB산업은행 마케팅 이용 동의 및 신규 가입 시 인증한 SKT 회선 유지 시,<br/> 매일의 최종잔액 중 200만원 이하 금액에
                      한하여 최대 연 2.0% 금리 적용 (세전)</p>
                  <p className="dash_type">200만원 초과 금액은 연 0.5% 기본금리 적용 (세전)</p>
                  <p className="dash_type">신규 가입 시 인증한 SKT 회선 미 유지 시, 전 구간 연0.1% 기본 금리 적용(세전)</p>
                </div>

            </section>
            <section className="desc-wrap">
                <div className="item-desc">
                  <article className={`${styles[""]}`}>
                      <img
                          src="/images/product/saving/saving-tprofitpassbook/img_finnq_pla3_mobile.png"
                          alt="기본금리 연 1.6%, 우대금리 연1.0%, 총 금리최대 연 2.60% (SKT 이동통신비 자동이체 시)"
                      ></img>

                      <div className="grouping">
                          <div className="desc_info">
                              <h6>믿고 맡길 수 있는<br/> <span className="txt-purple">1금융권</span> 상품!</h6>
                          </div>

                          <div className="benefit-detail">
                              <dl>
                                  <dt>KDB산업은행</dt>
                                  <dd>신뢰할 수 있는 1금융권</dd>
                              </dl>

                              <dl>
                                  <dt>예금자 보호</dt>
                                  <dd>최대 <mark>5</mark>천만원까지</dd>
                                  <dd className="sub">- 1인 기준, 원금과 이자포함</dd>
                              </dl>
                          </div>
                      </div>
                  </article>
                </div>
            </section>
            <section className="desc-wrap">
                <div className="item-desc">
                    <article className="desc-info">
                        <h6>입출금 및 관리는<br/> <span className="txt_purple">핀크</span>에서 간편하게!</h6>
                        <div className="benefit-detail">
                            <dl>
                                <dt>1일 최대 1천만원까지 무료송금</dt>
                            </dl>

                            <dl>
                                <dt>무료 ATM 출금</dt>
                            </dl>
                        </div>
                    </article>
                    <article className="sub-desc">
                        <div className="img-wrap">
                            <img
                                src="/images/product/saving/saving-tprofitpassbook/img_finnq_pla4.png"
                                alt="기본금리 연 1.6%, 우대금리 연1.0%, 총 금리최대 연 2.60% (SKT 이동통신비 자동이체 시)"
                            ></img>
                        </div>
                    </article>
                </div>
                <div className="guide-txt">
                    <p className="dash-type">무료송금 및 무료 ATM출금은 핀크에서 제공</p>
                    <p className="dash-type">전국 하나은행 ATM 이용 시, 수수료 무료</p>
                </div>
            </section>
            <section className="desc-wrap">
                <div className="item-desc">
                    <article className="desc-info">
                        <p className="sub-desc">
                            ※ 한국산업은행 준법감시인 심의필 제<mark>2020-06-007</mark>호<br/> <mark>(2020.06.11~2021.06.10)</mark>
                        </p>
                    </article>
                </div>
            </section>

        </article>
  );
};

export default SavingTProfitPassbook;
