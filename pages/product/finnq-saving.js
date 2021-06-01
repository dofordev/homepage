import Layout from '/components/Layout';
import styles from '/styles/product/FinnqSaving.module.scss';
import React, { useState, useEffect } from 'react';

import Tabs from '/components/Tabs';
import SavingHabitSaving from '/pages/product/saving-tab/SavingHabitSaving'
import SavingKDBXThigh5InstallmentSavings from '/pages/product/saving-tab/SavingKDBXThigh5InstallmentSavings'
import SavingTFinnqInstallmentSavings from '/pages/product/saving-tab/SavingTFinnqInstallmentSavings'
import SavingTProfitPassbook from '/pages/product/saving-tab/SavingTProfitPassbook'

const content = {
  0: <SavingHabitSaving />,
  1: <SavingTFinnqInstallmentSavings />,
  2: <SavingKDBXThigh5InstallmentSavings />,
  3: <SavingTProfitPassbook />
};

function FinnqmarketSaving() {

  const [tabNum, setTabNum] = useState(0);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("tabNum")) setTabNum(urlParams.get("tabNum"));
  }, []);

  return (
      <Layout>
        <section className={`${styles["container"]} container`}>
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
                오직 핀크에서만 누릴 수 있는 특별한 금융상품
              </em>
            </section>

            <section className="contents-body">
              <article className="tab-wrap">

                <Tabs clickEvent={setTabNum} activeTab={tabNum} list={[
                      { title: "습관저금" }
                      ,{ title: "T핀크적금" }
                      ,{ title: "KDB X T high5 적금" }
                      ,{ title: "T이득통장" }
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

export default FinnqmarketSaving;
