import styles from "/styles/product/FinnqCard.module.scss";
import React, {useState} from "react";
import SlideToggle from "react-slide-toggle";

export default function RefreshCard(){

    const [active, setActive] = useState(null);
    const [expend, setExpend] = useState([0,0]);
    const [collapse, setCollapse] = useState([0,0]);


    return (
        <article className={`${styles["refresh-card-wrap"]} contents-details`}>
            <section className={`${styles["visual"]} contents-visual`}>
                <h4 className="visual-title">
                    혜택의 새로고침
                    <br />새로고침 카드
                </h4>
                <p className={`${styles["txt-desc"]} pt-29`}>특정 사용처 결제 조건 없이!
                    <br/>핀크 서비스 이용자면, 월 최대 25,000원 적립
                </p>
                <dl className={`pt-17`}>
                    <dt className={styles["guide-title"]}>연회비</dt>
                    <dd className={`${styles["guide-desc"]} pt-40 `}>국내 · 해외겸용 <mark>25,000</mark>원</dd>
                </dl>
            </section>

            <div className={`${styles["background-wrap"]}`}>
                <section className={`${styles["visual2"]} contents-visual ${styles["mobile-text-center"]}`}>
                    <h5 className={`${styles["visual-title"]} visual-title`}>
                      특정 사용처<br className="mobile" /> 결제 조건 없는 카드
                    </h5>
                    <p className={`${styles["txt-desc"]} pt-29`}>핀크 5대 서비스 중 1가지만 이용해도<br className="mobile" /> 핀크머니 추가 적립 혜택 제공</p>

                    <dl className={`mt-48 `}>
                        <dt className={`${styles["sub-text1"]}`}>핀크 5대 서비스란?</dt>
                        <dd className={`${styles["sub-text2"]}`}>송금 / 충전 / 예·적금 / 대출금리비교 / 리얼리 출석</dd>
                    </dl>
                    <p className={`${styles["sub-text3"]}`}>※ 자세한 사항은 핀크 앱 홈페이지를 참고해 주세요.</p>
                </section>
            </div>
            <section className={`${styles["visual3"]} contents-visual ${styles["mobile-text-center"]}`}>
                <strong>혜택 1.</strong>
                <h6 className={`${styles["visual-title"]} visual-title`}>
                    월 최대 2.5만 핀크머니 적립
                </h6>
                <p className={`${styles["txt-desc"]} pt-29`}>
                    새로고침 카드로 월 40만원 이상 이용 시
                    <br/>6개월 간 매월 추가 적립 혜택 제공
                </p>
                <p className={`${styles["sub-text3"]}`}>※ 자세한 사항은 핀크 앱 홈페이지를 참고해 주세요.</p>
            </section>
            <div className={`${styles["background-wrap"]}`}>
                <section className={`${styles["visual4"]} contents-visual ${styles["mobile-text-center"]}` }>
                    <strong>혜택 2.</strong>
                    <h6 className={`${styles["visual-title"]} visual-title`}>
                       핀크 고객을 위한 카드니깐,
                        <br/>스페셜기프트 7만 핀크머니
                    </h6>
                    <p className={`${styles["txt-desc"]} pt-29`}>기간 : 21년 5월 31일 ~ 11월 30일</p>
                    <p className={`${styles["sub-text3"]}`}>※ 프로모션 혜택은 하단 '혜택확인' 및 유의사항을 참조해주세요.</p>
                </section>
            </div>

            <section className={`${styles["desc-wrap"]}`}>
                <ul className={`${styles["list-expend"]}`}>
                    <SlideToggle
                        expandEvent ={expend[0]}
                        collapseEvent = {collapse[0]}
                        collapsed
                    >
                        {({  setCollapsibleElement }) => (
                            <li>
                                <div className={`${styles["subject"]} ${active==0 ? styles["on"] : ""}`} onClick={()=>{
                                    if(active == 0){
                                        setActive(null);
                                        setExpend([0, 0]);
                                        setCollapse([Date.now(), Date.now()])
                                    }
                                    else{
                                        setActive(0);
                                        setExpend([Date.now(), 0]);
                                        setCollapse([0, Date.now()])
                                    }

                                }} >
                                    <a href="#open">혜택확인<i></i></a>
                                </div>
                                <div className={`${styles["detail-set"]} ${styles["card--info__guide"]}`} ref={setCollapsibleElement}>
                                    <ul className={`${styles["con"]} pt-20 pb-40 pl-80 pr-80`}>
                                        <li className={`${styles["sub-text0"]}`}>혜택 1.핀크머니 적립</li>
                                        <li className={`${styles[""]} mt-8 mb-20`}>[적립혜택] 최대 2만원 + 추가 5천원(프로모션)
                                            <div className={`mt-16`}>
                                                <table className={`${styles["tbl-type1"]}`}>
                                                    <caption>청구할인 혜택</caption>
                                                    <colgroup>
                                                        <col style={{width:"25%"}} span={4}/>

                                                    </colgroup>
                                                    <thead>
                                                    <tr>
                                                        <th scope="col" className="fontL">전월 실적</th>
                                                        <th scope="col" className="fontL">기본 적립</th>
                                                        <th scope="col" className="fontL">추가 적립</th>
                                                        <th scope="col" className="fontL">월 최종 혜택</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="fontL">40만원 이상</td>
                                                        <td className="fontL">10,000원</td>
                                                        <td className="fontL">+5,000원</td>
                                                        <td className="fontL"><span className="txt-purple">15,000원</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontL">80만원 이상</td>
                                                        <td className="fontL">15,000원</td>
                                                        <td className="fontL">+5,000원</td>
                                                        <td className="fontL"><span className="txt-purple">20,000원</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fontL">180만원 이상</td>
                                                        <td className="fontL">20,000원</td>
                                                        <td className="fontL">+5,000원</td>
                                                        <td className="fontL"><span className="txt-purple">25,000원</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>이벤트 참여 기간 : 21. 05. 31 ~ 21. 11. 30</li>
                                        <li className={`${styles["dash-type"]}`}>추가 혜택 지급 기간 : 21. 07. 31 ~ 22. 05. 31</li>
                                        <li className={`${styles["dash-type"]}`}>참여 조건 : 전월 1~말일 동안 핀크 5대 서비스 중 1개 이상 이용 조건 충족한 고객
                                            <p className={`${styles["sub-text4"]} mt-8`}>※ 대상 서비스 : 송금1회 이상, 충전 1회이상, 예적금 유지, 대출금리 비교 1회 이상,
                                                리얼리 출석 1회 이상</p>
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>추가적립 제공 기간 : 대상카드로 이벤트 기간 내 월 1일~말일 기준 40만원 이상 이용 시 조건 충족월 기준 익월 6개월간 5천 핀크머니 제공 (단, 40만원 미만 시 추가 혜택 미제공)</li>
                                        <li className={`${styles["dash-type"]}`}>핀크머니 적립일자 : 매월 20일에 적립되며, 휴일인 경우 다음 영업일에 지급됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>적립확인 : 핀크 > 새로고침카드 상품 페이지 관리 페이지에서 확인 가능합니다.</li>

                                    </ul>
                                    <ul className={`${styles["con"]} pt-20 pb-40 pl-80 pr-80`}>
                                        <li className={`${styles["sub-text0"]}`}>혜택 2.스페셜 기프트</li>
                                        <li className={`${styles["dash-type"]}`}>이벤트 기간 : 21. 05. 31 ~ 11. 30</li>
                                        <li className={`${styles["dash-type"]}`}>참여 조건 : 대상카드 보유 및 이용일 기준 직전 6개월 간 결제 이력이 없는 고객</li>
                                        <li className={`${styles["dash-type"]}`}>혜택 내용 : 7만 핀크 머니 제공 (1인 1회 한정)</li>
                                        <li className={`${styles["dash-type"]}`}>혜택 지급 조건 : 참조건 충족한 고객 중 대상카드로 이벤트 기간 내 7만원 이상 이용</li>
                                        <li className={`${styles["dash-type"]}`}>혜택 지급일 : 조건 충족월 다음달 말일 (휴일인 경우 다음 영업일 지급)
                                            <p className={`${styles["sub-text4"]} mt-8`}>※ 예시) 21.06.30일 내 7만원 이용 시, 21.7.31 핀크머니 지급</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        )}
                    </SlideToggle>
                    <SlideToggle
                        expandEvent ={expend[1]}
                        collapseEvent = {collapse[1]}
                        collapsed
                    >
                        {({ setCollapsibleElement }) => (
                            <li>
                                <div className={`${styles["subject"]} ${active==1 ? styles["on"] : ""}`} onClick={()=>{
                                    if(active == 1){
                                        setActive(null);
                                        setExpend([0, 0]);
                                        setCollapse([Date.now(), Date.now()])
                                    }
                                    else{
                                        setActive(1);
                                        setExpend([0, Date.now()]);
                                        setCollapse([Date.now(), 0])
                                    }

                                }} >
                                    <a href="#open">유의사항<i></i></a>
                                </div>
                                <div className={`${styles["detail-set"]} ${styles["card--info__guide"]}`} ref={setCollapsibleElement}>
                                    <ul className={`${styles["con"]} pt-30 pb-40 pl-80 pr-80`}>
                                        <li className={`${styles["dash-type"]}`}>새로고침 카드의 연회비는 국내전용 : 25,000원 / 해외겸용(VISA, Master) : 25,000원 입니다. (가족카드 면제)</li>
                                        <li className={`${styles["dash-type"]}`}>혜택 제공 관련 유의 사항은 아래와 같습니다.
                                            <ul>
                                                <li className={`mt-8`}>① 혜택 1의 추가적립 혜택은 해당카드 회원의 이벤트 기간내 한달 (1일~말일) 실적이 40만원 이상인 경우에 다음달 5천 핀크머니가 제공되는 혜택이며, 한달 기준 (1~말일) 40만원 미만 이용 시 다음달 혜택은 제공되지 않습니다.  이벤트기간 내 추가 적립 혜택 조건을 충족한 최초월 기준으로 다음달 부터 6개월 간 추가적립 조건 충족 시 혜택이 제공되며,  이벤트 기간이 지난 후 추가 적립 혜택 조건을 충족한 경우 혜택을 받으 실 수 없습니다.</li>
                                                <li className={`mt-8`}>② 혜택 2의 스페셜 기프트는 해당 카드 회원 중 이벤트 기간 내 이용일 기준으로 직전 6개월 무실적 회원에게만 제공되는 혜택이며, 이벤트 기간 내 해당카드로 한달 기준(1일~말일) 7만원 이상 사용 시에만 제공 됩니다. (1인 1회 한정)</li>
                                            </ul>
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>롯데카드의 다른 이벤트 혜택과 중복 적용되지 않으며, 심사기준에 따라 제한될 수 있습니다. (친구추천, 카드 연회비 캐시백, 이용 프로모션 해당 제휴사 포인트 지급 등)</li>
                                        <li className={`${styles["dash-type"]}`}>상품권, 기프트 카드 결제 건은 이용금액에서 제외 됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>승인취소, 부분취소, 환불, 가맹점 취소 등의 사유로 결제 이력이 확인되지 않을 경우 혜택이 제공되지 않습니다.</li>
                                        <li className={`${styles["dash-type"]}`}>업종별 제공 혜택은 롯데카드에 등록된 가맹점 업종을 기준으로 적용됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>카드 신청 전 혜택 및 이용 조건은 홈페이지 또는 상품설명서, 약관의 내용을 확인하시기 바랍니다.</li>
                                        <li className={`${styles["dash-type"]}`}>이벤트는 롯데카드 또는 제휴사 사정에 따라 사전고시없이 종료되거나 변경 될 수 있습니다.</li>
                                        <li className={`${styles["dash-type"]}`}>오프라인(전문모집인, 카드센터 등)을 통한 카드 소지회원은 이벤트 대상에서 제외됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>신용카드 발급이 부적정한 경우 카드발급이 제한될 수 있습니다.</li>
                                        <li className={`${styles["dash-type"]}`}>카드 이용대금과 이에 수반되는 모든 수수료를 지정된 대금 결제일에 상환해야 합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>금융소비자는 해당상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.</li>
                                    </ul>
                                </div>
                            </li>
                        )}
                    </SlideToggle>

                </ul>
            </section>
            <section className={`${styles["cont-wrap"]}`}>
                <article>
                    <ul className={`${styles["bul-text"]}`} >
                        <li className={`${styles["info-type"]}`}>
                            연체이자율 : 회원별·이용상품별 약정이율 + 최대 3%, 법정 최고금리(연24%) 이내<br/>
                            단, 연체 발생 시점에 약정이율이 없는 경우 아래와 같이 약정이율을 적용

                            <div className={`${styles["sub"]}`}>일시불 거래 연체 시 : 거래 발생 시점의 최소기간(2개월) 유이자 할부 금리연체</div>

                            <div className={`${styles["sub"]}`}>무이자 할부 거래 연체 시 : 거래 발생 시점의 동일한 할부 계약기간의 유이자 할부 금리</div>
                        </li>
                        <li className={`${styles["info-type"]}`}>상환능력에 비해 신용카드 사용액이 과도할 경우 귀하의 개인신용평점이 하락할 수 있습니다.</li>
                        <li className={`${styles["info-type"]}`}>개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.</li>
                        <li className={`${styles["info-type"]}`}>일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.</li>
                        <li className={`${styles["product-num"]}`}>※ 여신금융협회 심의필 제2021-C1h-04384호
                            (2021.05.25 ~ 2022.05.24)
                        </li>
                    </ul>
                </article>
            </section>
        </article>
    )
}