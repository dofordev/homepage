import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import Tabs from "../../components/Tabs";
import LoanComparePage from "./loan-tab/LoanComparePage";
import LoanEmergencyPage from "./loan-tab/LoanEmergencyPage";
import LoanSmartPage from "./loan-tab/LoanSmartPage";
import LoanLivingPage from "./loan-tab/LoanLivingPage";

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
  const [tabNum, setTabNum] = useState(0);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("tabNum")) setTabNum(urlParams.get("tabNum"));
  }, []);

  function clickCallback(index) {
    setTabNum(index);
  }

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
              <Tabs
                clickEvent={clickCallback}
                activeTab={tabNum}
                list={[
                  { title: "대출비교" },
                  { title: "비상금대출" },
                  { title: "똑똑대출" },
                  { title: "생활비대출" },
                ]}
              ></Tabs>
            </article>
            {content[tabNum]}
          </section>
        </div>
      </section>
    </Layout>
  );
}
