import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import LoanComparePage from "./loan/LoanComparePage";
import LoanEmergencyPage from "./loan/LoanEmergencyPage";
import LoanSmartPage from "./loan/LoanSmartPage";
import LoanLivingPage from "./loan/LoanLivingPage";

const content = {
  0: <LoanCompare />,
  1: <LoanEmergency />,
  2: <LoanSmart />,
  3: <LoanLiving />,
};

function LoanCompare() {
  return <LoanComparePage />;
}

function LoanEmergency() {
  return <LoanEmergencyPage />;
}

function LoanSmart() {
  return <LoanSmartPage />;
}

function LoanLiving() {
  return <LoanLivingPage />;
}

export default function FinnqLoan() {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log("URLSearchParams", URLSearchParams);
    if (urlParams.has("tabNum")) setActiveTab(urlParams.get("tabNum"));
  }, []);

  return (
    <Layout>
      <section className="container">
        <article className="key-visual product">
          <div className="inner">
            <p className="title">차별화된 금융상품</p>
            <p className="desc">
              오직 핀크에서만 누릴 수 있는 특별한 금융상품을 만나보세요!
            </p>
          </div>
        </article>

        <div className="contents">
          <section className="contents-head">
            <p className="title">대출</p>
            <em className="desc">
              오직 핀크에서만 누릴 수 있는 특별한 금융상품
            </em>
          </section>

          <section className="contents-body">
            <article className="tab-wrap">
              <ul>
                <li
                  className={activeTab === 0 ? "is-active" : ""}
                  onClick={() => setActiveTab(0)}
                >
                  <button type="button">대출비교</button>
                </li>
                <li
                  className={activeTab === 1 ? "is-active" : ""}
                  onClick={() => setActiveTab(1)}
                >
                  <button type="button">비상금대출</button>
                </li>
                <li
                  className={activeTab === 2 ? "is-active" : ""}
                  onClick={() => setActiveTab(2)}
                >
                  <button type="button">똑똑대출</button>
                </li>
                <li
                  className={activeTab === 3 ? "is-active" : ""}
                  onClick={() => setActiveTab(3)}
                >
                  <button type="button">생활비대출</button>
                </li>
              </ul>
            </article>
            {content[activeTab]}
          </section>
        </div>
      </section>
    </Layout>
  );
}
