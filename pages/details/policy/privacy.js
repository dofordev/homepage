import React, { useEffect, useState } from "react";
import Layout from "/components/Layout";
import PrivacyPage1 from "/pages/details/policy/load-privacy/PrivacyPage1";
import PrivacyPage2 from "/pages/details/policy/load-privacy/PrivacyPage2";
import PrivacyPage3 from "/pages/details/policy/load-privacy/PrivacyPage3";
import PrivacyPage4 from "/pages/details/policy/load-privacy/PrivacyPage4";
import PrivacyPage5 from "/pages/details/policy/load-privacy/PrivacyPage5";
import PrivacyPage6 from "/pages/details/policy/load-privacy/PrivacyPage6";
import PrivacyPage7 from "/pages/details/policy/load-privacy/PrivacyPage7";
import PrivacyPage8 from "/pages/details/policy/load-privacy/PrivacyPage8";
import PrivacyPage9 from "/pages/details/policy/load-privacy/PrivacyPage9";
import PrivacyPage10 from "/pages/details/policy/load-privacy/PrivacyPage10";
import PrivacyPage11 from "/pages/details/policy/load-privacy/PrivacyPage11";
import PrivacyPage12 from "/pages/details/policy/load-privacy/PrivacyPage12";
import PrivacyPage13 from "/pages/details/policy/load-privacy/PrivacyPage13";
import styles from "/styles/policy/FinnqPolicy.module.scss";

export default function Privacy() {
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
            <p className="title">개인정보 처리방침 </p>
            <em className="desc">Privacy Policy</em>
          </section>

          <section className="contents-body">
            <article className={`${styles["terms"]} contents-details`}>
              <div className="notice-wrap width-fix">
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
              </div>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
}
