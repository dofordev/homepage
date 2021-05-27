import Layout from "../../components/Layout";
import Head from "next/head";
import Styles from "../../styles/FinnqmarketSaving.module.scss";
import { useState, useEffect } from "react";

import Tabs from "../../components/Tabs";
import SavingHabitSavingPage from "./saving-tab/SavingHabitSavingPage"
import SavingKDBXThigh5InstallmentSavingsPage from "./saving-tab/SavingKDBXThigh5InstallmentSavingsPage"
import SavingTFinnqInstallmentSavingsPage from "./saving-tab/SavingTFinnqInstallmentSavingsPage"
import SavingTProfitPassbookPage from "./saving-tab/SavingTProfitPassbookPage"

const content = {
  0: <SavingHabitSaving />,
  1: <SavingTFinnqInstallmentSavings />,
  2: <SavingKDBXThigh5InstallmentSavings />,
  3: <SavingTProfitPassbook />,
};

function SavingHabitSaving() {
  return <SavingHabitSavingPage />;
}

function SavingTFinnqInstallmentSavings() {
  return <SavingTFinnqInstallmentSavingsPage />;
}

function SavingKDBXThigh5InstallmentSavings() {
  return <SavingKDBXThigh5InstallmentSavingsPage />;
}

function SavingTProfitPassbook() {
  return <SavingTProfitPassbookPage />;
}

export default function FinnqmarketCard() {
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
      <Head>
        <meta name="description" content="덮어쓰기" />
      </Head>
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
            <p className="title">예적금</p>
            <em className="desc">
              오직 핀크에서만 누릴 수asdasdasd 있는 특별한 금융상품 aaaa
            </em>
          </section>

          <section className="contents-body">
            <article className="tab-wrap">
              <Tabs
                clickEvent={clickCallback}
                activeTab={tabNum}
                list={[
                  { title: "습관저금" },
                  { title: "T핀크적금" },
                  { title: "KDB X T high5 적금" },
                  { title: "T이득통장" },
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
