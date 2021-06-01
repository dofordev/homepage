import styles from '/styles/product/FinnqSaving.module.scss';
import Image from 'next/image';
import React, { useState, useEffect }  from 'react';
//
// const SavingTFinnqInstallmentSavings = () => {
//   return (
//     <article className="contents-details">
//       <div className="contents-visual">
//         <p className="visual-title">
//           SKT 고객이라면,
//           <br />
//           최대 연 2.6%
//         </p>
//       </div>
//       <div className="desc-wrap">
//         <div className="item-desc">detail 1</div>
//       </div>
//       <div className="desc-wrap">
//         <div className="item-desc">detail 2</div>
//       </div>
//       <div className="desc-wrap">
//         <div className="item-desc">detail 3</div>
//       </div>
//     </article>
//   );
// };

export default function SavingTFinnqInstallmentSavings() {

    useEffect(() => {

    }, []);

    return (
        <article className={`${styles["finnq-saving-wrap"]} contents-details`}>
            <section className={`${styles["visual"]} contents-visual`}>
                <h4 className="visual-title">
                    SKT 고객이라면,
                    <br />
                    최대 연 2.6%
                </h4>
                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>가입정보</dt>
                    <dd className={`${styles["guide-desc"]} pt-17`}>
                        자주 소비하는 카테고리를 지정하면, 해당 카테고리 카드 결제 시
                        <br className="mobile" ></br>
                        핀크머니에서 습관저금으로 자동 저금
                    </dd>
                </dl>
            </section>
            <div className="desc-wrap">
                <div className="item-desc">
                    <section className={"desc-info"}>
                        <h4 className="visual-title">
                            쓰면서 모으는 <br />
                            나만의 맞춤 저금 트레이닝
                        </h4>
                    </section>
                    <section className={"desc-info"}>
                        <Image
                            src="/images/product/saving/saving-habitsaving/img_habit_saving2.png"
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
                            습관저금 만들기
                        </h4>
                        <div className={"step-list-guide"}>
                            <ul className={`${styles['step--list__guide']}`}>
                                <li>자주쓰는 카드 연결</li>
                                <li>6가지 습관 중 나의 소비 스타일에 맞는 카테고리 선택
                                    <div className={"desc-img"}>
                                        <Image
                                            src="/images/product/saving/saving-habitsaving/img_habit_saving3-2.png"
                                            alt=""
                                            width={400}
                                            height={100}/>
                                    </div>
                                </li>
                                <li>결제할 때마다 자동으로 저금할 금액을 설정
                                    <div className={"desc-img"}>
                                        <Image
                                            src="/images/product/saving/saving-habitsaving/img_habit_saving3-3.png"
                                            alt=""
                                            width={400}
                                            height={330}/>
                                    </div>
                                </li>
                                <li>설정한 카테고리에서 결제하면<br/>핀크머니에서 습관저금으로 자동 저금</li>
                            </ul>
                        </div>
                    </section>
                    <section className={"desc-info"}>
                        <Image
                            src="/images/product/saving/saving-habitsaving/img_habit_saving3-1.png"
                            alt="소비 습관지정  - 쌍이는 습관저금 잔고 - 카드 결제 시"
                            width={400}
                            height={368}/>
                    </section>
                </div>
            </div>
        </article>
    );
}
