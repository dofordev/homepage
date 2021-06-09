import React, { useEffect, useState } from "react";
import Layout from "/components/Layout";
import styles from "/styles/announce/FinnqAnnounce.module.scss";

export default function announcement() {
  /* 
  const content = {
    0: <PrivacyPage1 />,
    1: <PrivacyPage2 />,
    2: <PrivacyPage3 />,
    3: <PrivacyPage4 />,
    4: <PrivacyPage5 />,
    5: <PrivacyPage6 />,
    6: <PrivacyPage7 />,
    7: <PrivacyPage8 />,
    8: <PrivacyPage9 />,
    9: <PrivacyPage10 />,
    10: <PrivacyPage11 />,
    11: <PrivacyPage12 />,
    12: <PrivacyPage13 />,
  };

  const [tabNum, setTabNum] = useState(0);

  const selectClick = () => {
    const selectGroupTag = document.querySelector(".select-group");
    let state = selectGroupTag.classList.contains("is-active");
    if (!state) {
      selectGroupTag.classList.add("is-active");
    } else {
      selectGroupTag.classList.remove("is-active");
    }
  };

  useEffect(() => {
    const selectGroupTag = document.querySelector(".select-group");
    const listLiTag = document.querySelectorAll(".select-list li");
    const selectButtonTag = document.querySelector(".select-button");

    listLiTag.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        setTabNum(i);
        selectButtonTag.textContent = item.textContent;
        selectGroupTag.classList.remove("is-active");
      });
    });
  }, []);

  const privacyDate = [
    "2017.09.04",
    "2018.06.14",
    "2018.07.12",
    "2018.08.31",
    "2018.10.11",
    "2018.11.19",
    "2018.12.13",
    "2019.06.27",
    "2019.09.24",
    "2019.10.28",
    "2019.12.18",
    "2020.09.24",
    "2020.12.21",
  ];
  */

  return (
    <Layout>
      <section className="container">
        <article className="key-visual">
          <div className="inner">
            <p className="title">뱅크 말고, 핀크</p>
            <p className="desc">
              차별화된 금융상품과 서비스 지금 경험해보세요!
            </p>
          </div>
        </article>

        <div className="contents pages">
          <section className="contents-head">
            <p className="title">공고</p>
            <em className="desc">Announcement</em>
          </section>

          <section className="contents-body">
            <article className={`contents-details`}>
              <div className="width-fix">
                <p className={styles["desc-text"]}>
                  「금융규제 운영규정」 제8조에 근거한 금융감독원의
                  「전자금융업자의 이용자보호 가이드라인」에 따라 당사의
                  선불전자지급수단 ‘핀크머니’의 *선불충전금 운용현황 및 보증보험
                  가입내역을 아래와 같이 공시합니다.
                </p>

                <p className={styles["table-title"]}>선불충전금 운영현황</p>
                <p className={styles["table-guide"]}>
                  기준일시: 2021년 3월 31일
                </p>
                <div className="table-row">
                  <table>
                    <caption>상세내용</caption>
                    <colgroup>
                      <col style={{ width: "28%" }}></col>
                      <col style={{ width: "17%" }}></col>
                      <col style={{ width: "auto" }}></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">선불전자지급수단 발행사</th>
                        <td colSpan="2">주식회사 핀크</td>
                      </tr>
                      <tr>
                        <th scope="row">선불전자지급수단 명칭</th>
                        <td colSpan="2">핀크머니</td>
                      </tr>
                      <tr>
                        <th scope="row">선불충전금 금액(잔액)</th>
                        <td colSpan="2">4,112,446,616원</td>
                      </tr>
                      <tr>
                        <th scope="row">선불충전금 관리 방식</th>
                        <td colSpan="2">
                          <a
                            href="/files/finnq_ins_pro.pdf"
                            target="_blank"
                            title="보증보험증서 PDF다운로드"
                          >
                            보증보험 가입
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" rowspan="4">
                          보증보험가입 내역
                        </th>
                        <td>보험사명</td>
                        <td>서울보증보험</td>
                      </tr>
                      <tr>
                        <td>보험상품명</td>
                        <td>선불전자지급수단 상환채무보증</td>
                      </tr>
                      <tr>
                        <td>보험가입금액</td>
                        <td>5,000,000,000원</td>
                      </tr>
                      <tr>
                        <td>보험기간</td>
                        <td>2020-12-28 ~ 2021-12-27(365 일간)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-10">
                  - 당사 선불충전금은 고유자산과 분리하여 은행 보통예금을 통해
                  관리되고 있습니다.<br></br> ('보통예금’은 예입과 인출을
                  자유로이 할 수 있는 통장식 은행예금으로서, 예금자보호법에 따라
                  예금보험공사가 보호합니다.)
                </p>
                {/*
                <div className="select-group">
                  <div className="select-design">
                    <button
                      type="button"
                      className="select-button"
                      onClick={selectClick}
                    >
                      2017.09.04
                    </button>
                  </div>
                
                    <ul className="select-list">
                      {privacyDate.map((privacyDate, idx) => (
                        <li key={idx}>
                          <button type="button">{privacyDate}</button>
                        </li>
                      ))}
                    </ul>                    
                </div>
                
                <article className="load-area">{content[tabNum]}</article>
                */}
              </div>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
}
