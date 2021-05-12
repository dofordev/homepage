import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import LoanComparePage from "./loan/LoanComparePage";
import LoanEmergencyPage from "./loan/LoanEmergencyPage";

const content = {
  0: <LoanCompare />,
  1: <LoanEmergency />,
  2: <LoanSmart />,
  3: <LoanLiving />,
};

export default function FinnqLoan() {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const queryString = window.location.search;
    console.log("queryString", queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log("urlParams", urlParams);
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
                  className={activeTab == 0 ? "is-active" : ""}
                  onClick={() => setActiveTab(0)}
                >
                  <button type="button">대출비교</button>
                </li>
                <li
                  className={activeTab == 1 ? "is-active" : ""}
                  onClick={() => setActiveTab(1)}
                >
                  <button type="button">비상금대출</button>
                </li>
                <li
                  className={activeTab == 2 ? "is-active" : ""}
                  onClick={() => setActiveTab(2)}
                >
                  <button type="button">똑똑대출</button>
                </li>
                <li
                  className={activeTab == 3 ? "is-active" : ""}
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

function LoanCompare() {
  return <LoanComparePage />;
}

function LoanEmergency() {
  return <LoanEmergencyPage />;
}

function LoanSmart() {
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          입금까지<br className="mobile"></br>번개처럼 빠른 똑똑대출
        </p>
        <div className="btn-wrap app-down">
          <a href="#none" className="btn btn-google">
            <span>Google Play</span>
          </a>
          <a href="#none" className="btn btn-apple">
            <span>App Store</span>
          </a>
        </div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 1</div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 2</div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 3</div>
      </div>
    </article>
  );
}

function LoanLiving() {
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          급전이 필요할 땐<br></br>
          핀크 생활비대출
        </p>
        <div className="btn-wrap app-down">
          <a href="#none" className="btn btn-google">
            <span>Google Play</span>
          </a>
          <a href="#none" className="btn btn-apple">
            <span>App Store</span>
          </a>
        </div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 1</div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 2</div>
      </div>
      <div className="desc-wrap">
        <div className="item-desc">detail 3</div>
      </div>
    </article>
  );
}
