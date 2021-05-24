
import Layout from '/components/Layout'
import styles from '/styles/product/FinnqCard.module.scss'
import React, { useState, useEffect } from 'react';

import Tabs from '/components/Tabs'
import FinnqHanaCard from '/pages/product/card-tab/FinnqHanaCard'
import TwoPlusCard from '/pages/product/card-tab/TwoPlusCard'
import WaveCard from '/pages/product/card-tab/WaveCard'
import FinnqCheckCard from '/pages/product/card-tab/FinnqCheckCard'

const content = {
  0 : <FinnqHanaCard/>,
  1 : <TwoPlusCard/>,
  2 : <WaveCard/>,
  3 : <FinnqCheckCard/>
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
              <article className="tab-wrap">

                  <Tabs clickEvent={setTabNum} activeTab={tabNum} list={[
                    {title:'핀크카드'}
                    , {title:'투뿔카드'}
                    , {title:'웨이브카드'}
                    , {title: '핀크체크카드'}]}>
                    </Tabs>

                  
              </article>
              {content[tabNum]}
            </section>
          </div>
        </section>
      </Layout>
  )
}

export default React.memo(FinnqCard);