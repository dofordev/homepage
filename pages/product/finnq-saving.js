
import Layout from '../../components/Layout'
import Head from 'next/head'
import Styles from '../../styles/FinnqmarketSaving.module.scss'
import { useState, useEffect } from 'react';

import Tabs from '../../components/Tabs'


const content = {
  0 : <HabitSaving/>,
  1 : <TFinnqInstallmentSavings/>,
  2 : <KDBXThigh5InstallmentSavings/>,
  3 : <TProfitPassbook/>
}

export default function FinnqmarketCard() {
  
  const [tabNum, setTabNum] = useState(0);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('tabNum')) setTabNum(urlParams.get('tabNum'));
  }, []);

  function clickCallback(index){
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
                오직 핀크에서만 누릴 수 있는 특별한 금융상품
              </em>
            </section>

            <section className="contents-body">
              <article className="tab-wrap">

                <Tabs clickEvent={clickCallback} activeTab={tabNum} list={[
                    {title:'습관저금'}
                    , {title:'T핀크적금'}
                    , {title:'KDB X T high5 적금'}
                    , {title: 'T이득통장'}]}>
                </Tabs>

              </article>
              {content[tabNum]}
              
            </section>
          </div>
        </section>
      </Layout>
    
  )


}

function HabitSaving(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          습관이 돈이
          <br />되는 방법
        </p>
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
  )
}

function TFinnqInstallmentSavings(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          SKT 고객이라면,
          <br />최대 연 2.6%
        </p>
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
  )
}

function KDBXThigh5InstallmentSavings(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          상식을 뛰어넘는
          <br /><span class="cl_r">최대 <em>연 <mark>5.0%</mark></em> 자유적금</span>
        </p>
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
  )
}

function TProfitPassbook(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          매월 이자가 늘어나는
          <br />T이득통장!
        </p>
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
  )
}
