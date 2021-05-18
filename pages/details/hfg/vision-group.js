import Layout from "../../../components/Layout";
import { useState, useEffect } from "react";
import HanaVisionPage from "./vision-tab/HanaVisionPage";
import HanaValuePage from "./vision-tab/HanaValuePage";
import HanaCooperatePage from "./vision-tab/HanaCooperatePage";
import Tabs from "../../../components/Tabs";
// import LoanEmergencyPage from "./loan-tab/LoanEmergencyPage";
// import LoanSmartPage from "./loan-tab/LoanSmartPage";
// import LoanLivingPage from "./loan-tab/LoanLivingPage";

const content = {
  0: <HanaVision />,
  1: <HanaValue />,
  2: <HanaCooperate />,
};

function HanaVision() {
  return <HanaVisionPage />;
}

function HanaValue() {
  return <HanaValuePage />;
}

function HanaCooperate() {
  return <HanaCooperatePage />;
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
            <p className="title">하나금융그룹</p>
            <em className="desc">Hana Financial Group</em>
          </section>

          <section className="contents-body">
            <article className="tab-wrap table-type">
              <Tabs
                clickEvent={clickCallback}
                activeTab={tabNum}
                list={[
                  { title: "비전과 미션" },
                  { title: "핵심가치" },
                  { title: "관계사" },
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
