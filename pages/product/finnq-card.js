
import Layout from '/components/Layout'
import styles from '/styles/product/FinnqCard.module.scss'
import React, { useState, useEffect } from 'react';

import Tabs from '/components/Tabs'
import FinnqHanaCard from '/pages/product/card-tab/FinnqHanaCard'
import TwoPlusCard from '/pages/product/card-tab/TwoPlusCard'
import WavveCard from '/pages/product/card-tab/WavveCard'
import FinnqCheckCard from '/pages/product/card-tab/FinnqCheckCard'
import RefreshCard from '/pages/product/card-tab/RefreshCard'

const content = {
  0 : <FinnqHanaCard/>,
  1 : <TwoPlusCard/>,
  2 : <WavveCard/>,
  3 : <FinnqCheckCard/>,
  4 : <RefreshCard/>
}

function FinnqCard() {
  const [tabNum, setTabNum] = useState(0);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('tabNum')) setTabNum(urlParams.get('tabNum'));


  }, []);

  return (
      <Layout>
        <section className={`${styles["container"]} container`}>
          <article className="key-visual product">
            <div className="inner">
              <h2 className="title">차별화된 금융상품</h2>
              <p className="desc">
                오직 핀크에서만 누릴 수 있는 특별한 금융상품을 만나보세요!
              </p>

            </div>
          </article>

          <div className="contents">
            <section className="contents-head">
              <h3 className="title">카드</h3>
              <em className="desc">
                오직 핀크에서만 누릴 수 있는 특별한 금융상품
              </em>
            </section>

            <section className="contents-body">
              <article className="tab-wrap mb-0">

                <Tabs clickEvent={setTabNum} activeTab={tabNum} list={[
                  {title:'핀크카드'}
                  , {title:'투뿔카드'}
                  , {title:'웨이브카드'}
                  , {title: '핀크체크카드'}
                  , {title: '새로고침카드'}]}>
                </Tabs>


              </article>
              {content[tabNum]}
            </section>
          </div>
        </section>
      </Layout>
  )
}

export default FinnqCard;