import Layout from "../../../components/Layout";
import { useState, useEffect } from "react";
import TermsFinnqPage from "./service-tab/TermsFinnqPage";
import Tabs from "../../../components/Tabs";
// import LoanEmergencyPage from "./loan-tab/LoanEmergencyPage";
// import LoanSmartPage from "./loan-tab/LoanSmartPage";
// import LoanLivingPage from "./loan-tab/LoanLivingPage";

const content = {
  0: <TermsFinnq />,
  1: <TermsReword />,
  2: <TermsCooperate />,
  3: <TermsSend />,
};

function TermsFinnq() {
  return <TermsFinnqPage />;
}

function TermsReword() {
  return <TermsRewordPage />;
}

function TermsCooperate() {
  return <TermsCooperatePage />;
}

function TermsSend() {
  return <TermsSendPage />;
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
                  { title: "핀크서비스 약관" },
                  { title: "리워드서비스 약관" },
                  { title: "제휴서비스 약관" },
                  { title: "소액해외송금업 약관" },
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
