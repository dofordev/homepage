import styles from "/styles/product/FinnqCard.module.scss";
import React, {useState} from "react";
import SlideToggle from "react-slide-toggle";

function FinnqCheckCard(){

    const [active, setActive] = useState(null);
    const [expend, setExpend] = useState([0,0,0]);
    const [collapse, setCollapse] = useState([0,0,0]);


    return (
        <article className={`${styles["finnq-check-card-wrap"]} contents-details`}>
            <section className={`${styles["visual1"]} contents-visual`}>
                <p className="">핀크 체크카드</p>
                <h4 className="visual-title mt-16">
                    체크카드의 새로운 기준
                    <br />실시간 2%적립
                </h4>
                <p className={`${styles["txt-desc"]} pt-29`}>연회비, 전월실적 없음</p>

            </section>

            <div className={`${styles["background-wrap"]}`}>
                <section className={`${styles["visual2"]} contents-visual`}>
                    <div className={`${styles["cont1"]}`}>
                        <h5 className={`${styles["visual-title"]}`}>핀크머니로 결제<br/>(잔액 내)</h5>
                        <ul className={`${styles["list-item"]} mt-68`}>
                            <li className={``}>~21.8월까지<br /><em className="txt-purple">2%</em></li>
                            <li className={`mt-32`}>21.9 ~ 12월까지<br /><em className="txt-purple">1.2%</em></li>
                        </ul>
                    </div>
                    <div className={`${styles["cont2"]} ${styles["right-content"]}`}>
                        <h6 className={`${styles["visual-title"]}`}>자동충전 계좌<br/>결제</h6>
                        <ul className={`${styles["list-item"]} mt-68`}>
                            <li>~21.8월까지<br /><em className="txt-purple">0.2%</em></li>
                            <li className={`mt-32`}>21.9 ~ 12월까지<br /><em className="txt-purple">0.2%</em></li>
                        </ul>
                    </div>
                </section>
            </div>
            <section className={`${styles["visual3"]} contents-visual ${styles["mobile-text-center"]}`}>
                <h6 className="visual-title mt-16">
                    자유롭게 결제 계좌 변경
                </h6>
            </section>
            <div  className={`${styles["background-wrap"]}`}>
                <section className={`${styles["visual4"]} contents-visual ${styles["mobile-text-center"]}`}>
                    <h6  className="visual-title mt-16">
                        핀크 체크카드<br/>
                        추가 기능!
                    </h6>
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
                                        setExpend([0, 0,0]);
                                        setCollapse([Date.now(), Date.now(), Date.now()])
                                    }
                                    else{
                                        setActive(0);
                                        setExpend([Date.now(), 0,0]);
                                        setCollapse([0, Date.now(), Date.now()])
                                    }

                                }} >
                                    <a href="#open">핀크캐시백 적립<i></i></a>
                                </div>
                                <div className={`${styles["detail-set"]} ${styles["card--info__guide"]}`} ref={setCollapsibleElement}>
                                    <ul className={`${styles["con"]} pt-20 pb-40 pl-80 pr-80`}>
                                        <li className={`${styles["dash-type"]}`}>전월 실적 조건 없이, 이용금액의 0.2% 실시간 적립</li>
                                        <li className={`${styles["dash-type"]}`}>2021.12.31일까지 추가 적립 이벤트 혜택 제공
                                            <div className={`mt-16`}>
                                                <table className={`${styles["tbl-type1"]}`}>
                                                    <caption>청구할인 혜택</caption>
                                                    <colgroup>
                                                        <col style={{width:"auto"}} />
                                                        <col style={{width:"33.3%"}} />
                                                        <col style={{width:"33.3%"}} />
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="fontL">기간</th>
                                                            <th scope="col" className="fontL">핀크머니결제<br />(잔액 내)</th>
                                                            <th scope="col" className="fontL">자동충전결제</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fontL">~21.08월까지</td>
                                                            <td className="fontL"><span className="txt-purple">2%</span>
                                                            </td>
                                                            <td className="fontL">0.2%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fontL">21.09~12월까지</td>
                                                            <td className="fontL"><span className="txt-purple">1.2%</span>
                                                            </td>
                                                            <td className="fontL">0.2%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p className={`${styles["sub-text"]}`}>월 적립한도: 10,000원</p>
                                            </div>
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>기본/이벤트 적립혜택은 핀크머니로 결제된 이용금액에 대해서 적용합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>결제대금 부족분에 대해 1만원 단위 자동 충전 시 자동충전으로 결제된 거래건은 기본 적립률이 적용됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>체크카드결제계좌 이용금액은 적립대상이 아닙니다.</li>
                                        <li className={`${styles["dash-type"]}`}>핀크머니결제는 결제시점에 자동충전 없이 핀크머니잔액 내에서 결제를 의미합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>자동충전결제는 결제시점에 핀크머니의 잔액이 부족하여 핀크에 연결된 주계좌에서 충전하여 결제하는 것을 의미합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>적립 서비스는 이용 후 적립 거래건이 해당월에 취소 된 경우에만 적립한도가 복원됩니다.
                                            <br/>(월말 취소 시 가맹점에 따라 결제 취소가 익월 초에 발생하는 경우가 있습니다. 적립금 한도 복원 및 재적립은 불가합니다.)
                                        </li>
                                        <li className={`${styles["dash-type"]}`}>적립 제외: 상품권 구매금액, 기프트카드, 선불카드 구매/충전 금액, 국세/지방세/공공요금, 4대보험(국민 연금, 건강보험, 고용보험, 산재보험), 대학(원)등록금, 아파트관리(임대료), 각종 수수료 및 이자, 연회비는 포인트, 휴대폰, 교통 후불 청구, 해외 결제 등 무승인 가맹점의 결제는 적립대상에서 제외됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>이벤트는 핀크의 사정에 의해 공지 없이 변경 되거나 종료 될 수 있습니다.</li>

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
                                        setExpend([0, 0, 0]);
                                        setCollapse([Date.now(), Date.now(), Date.now()])
                                    }
                                    else{
                                        setActive(1);
                                        setExpend([0, Date.now(), 0]);
                                        setCollapse([Date.now(), 0, Date.now()])
                                    }

                                }} >
                                    <a href="#open">이용안내<i></i></a>
                                </div>
                                <div className={`${styles["detail-set"]} ${styles["card--info__guide"]}`} ref={setCollapsibleElement}>
                                    <div className={`${styles["con"]} pt-48 pb-40 pl-80 pr-80`}>
                                        <dl>
                                            <dt>연회비</dt>
                                            <dd className={`${styles["dash-type"]}`}>무료</dd>
                                        </dl>
                                        <dl>
                                            <dt>발급대상</dt>
                                            <dd className={`${styles["dash-type"]}`}>만 18세 이상 핀크 가입자 중 계좌 연결한 회원</dd>
                                        </dl>
                                        <dl>
                                            <dt>사용처</dt>
                                            <dd className={`${styles["dash-type"]}`}>국내, 해외 신한카드 온/오프라인 가맹점</dd>
                                        </dl>
                                        <dl>
                                            <dt>재발급 수수료</dt>
                                            <dd className={`${styles["dash-type"]}`}>무료</dd>
                                        </dl>
                                        <dl>
                                            <dt>결제방법</dt>
                                            <dd className={`${styles["dash-type"]}`}>핀크머니에서 결제</dd>
                                            <dd className={`${styles["dash-type"]}`}>핀크머니 잔액이 부족한 경우 핀크에 연결된 주계좌에서 1만원단위로 충전 후 결제
                                            <br/>(핀크머니 주계좌가 KDB 산업은행인 경우 자동충전결제 서비스 제공이 불가하여 주계좌를 시중은행으로 변경하시거나, 이용하시려는 금액을 핀크머니로 먼저 충전하신 후 사용 부탁드립니다.)</dd>
                                            <dd className={`${styles["dash-type"]}`}>핀크 연결계좌 잔액 부족하거나 자동충전결제가 실패한 경우 카드발급 시 등록한 카드결제계좌에서 결제
                                                <div className={`${styles["star-type"]}`}>정기성요금 및 무승인거래(보험료, 통신비, 아파트 관리비 등), 후불교통요금, 해외결제는 핀크머니가 아닌 카드결제계좌에서만 결제됩니다.</div>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>핀크머니로 결제시 한도</dt>
                                            <dd className={`${styles["dash-type"]}`}>1회 200만원/1일 1천만원</dd>
                                        </dl>
                                        <dl>
                                            <dt>카드결제계좌로 결제시 한도</dt>
                                            <dd className={`${styles["dash-type"]}`}>1일 600만원/월 2천만원(5천만원까지 한도 상향 요청 가능)</dd>
                                        </dl>
                                        <ul className="mt-32">
                                            <li className={`${styles["info-type"]}`}>핀크 체크카드 발급은 신한카드 발급 심사 기준을 따릅니다.</li>
                                            <li className={`${styles["info-type"]}`}>카드 발급 전 상품에 관한 상세한 사항은 상품설명서 및 약관을 확인하시기 바랍니다.
                                            <br/>신한카드 고객센터 : 1544-7000</li>

                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )}
                    </SlideToggle>
                    <SlideToggle
                        expandEvent ={expend[2]}
                        collapseEvent = {collapse[2]}
                        collapsed
                    >
                        {({  setCollapsibleElement }) => (
                            <li>
                                <div className={`${styles["subject"]} ${active==2 ? styles["on"] : ""}`} onClick={()=>{
                                    if(active == 2){
                                        setActive(null);
                                        setExpend([0, 0, 0]);
                                        setCollapse([Date.now(), Date.now(), Date.now()])
                                    }
                                    else{
                                        setActive(2);
                                        setExpend([0, 0, Date.now()]);
                                        setCollapse([Date.now(), Date.now(), 0])
                                    }

                                }} >
                                    <a href="#open">유의사항<i></i></a>
                                </div>
                                <div className={`${styles["detail-set"]} ${styles["card--info__guide"]}`} ref={setCollapsibleElement}>
                                    <ul className={`${styles["con"]} pt-48 pb-40 pl-80 pr-80`}>
                                        <li className={`${styles["dash-type"]}`}>핀크머니 거래 결제 취소 건은 핀크머니로 환급되며, 은행계좌 거래 결제 취소 건은 해당 계좌로 환급됩니다.</li>
                                        <li className={`${styles["dash-type"]}`}>사용하신 내역은 소득공제 혜택이 가능합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>핀크 App. 탈회 또는 이용 정지 시 발급된 제휴카드 사용은 불가합니다.</li>
                                        <li className={`${styles["dash-type"]}`}>카드 발급 신청시 상품설명서 및 상품 약관을 반드시 확인하시기 바랍니다.</li>
                                        <li className={`${styles["dash-type"]}`}>자세한 내용은 신한카드 홈페이지(www.shinhancard.com), 국제브랜드사 홈페이지 (www.visa.com)를 참고하거나 신한카드 고객센터 (1544-7000)로 문의 바랍니다.</li>


                                    </ul>
                                </div>
                            </li>
                        )}
                    </SlideToggle>
                </ul>
            </section>

            <section className={`${styles["info-wrap"]} contents-visual`}>
                <div className={`${styles["card--info__guide"]}`}>
                    <div className={`${styles["card__guide"]}`}>
                        <ul>
                            <li className={`${styles["info-type"]}`}>연체이자율 : 약정금리 + 최대3%, 법정 최고금리(24%)이내 단, 연체 발생 시점에 약정금리가 없는 경우 아래와 같이 적용함</li>
                            <li className={`${styles["dash-type"]}`}>일시불 거래 연체 시 : 거래 발생 시점의 최소기간(2개월) 유이자 할부 금리</li>
                            <li className={`${styles["dash-type"]}`}>무이자 할부 거래 연체 시 : 거래 발생 시점의 동일한 할부 계약기간의 유이자 할부 금리</li>
                            <li className={`${styles["dash-type"]}`}>그 외의 경우 : 약정금리는 상법상 상사법정이율과 상호금융 가계자금대출금리* 중 높은 금리적용
                                <div className={`${styles["star-type"]}`}>한국은행에서 매월 발표하는 가장 최근의 비은행 금융기관 가중평균대출금리(신규대출 기준)</div>
                            </li>

                        </ul>
                    </div>
                    <ul className="mt-32">
                        <li className={`${styles["info-type"]}`}>계약체결 전 연회비, 이용조건등에 관한 상세사항은 상품설명서, 약관 및 홈페이지 참조 바랍니다.</li>
                        <li className={`${styles["info-type"]} bold`}>신용카드 남용은 가계경제에 위협이 됩니다.</li>
                        <li className={`${styles["info-type"]} bold`}>여신금융상품 이용 시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다.</li>

                    </ul>

                    <div className="">
                        <ul className="mt-30">
                            <li className={`${styles["info-type"]}`}>준법감시 심의필 제
                                <mark>20210317-Dpi-001</mark>
                                호<br className="mobile"/>
                                <mark className="">(2021.03.17)</mark></li>
                        </ul>
                    </div>

                </div>
            </section>
        </article>
    )
}

export default FinnqCheckCard;