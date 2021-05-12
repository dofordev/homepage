
import Layout from '../components/Layout'
<<<<<<< HEAD

export default function finnqmarketCard() {
  return (
<Layout> 
예적금
</Layout>
  )
}
=======
import Head from 'next/head'
import Styles from '../../styles/FinnqmarketCard.module.scss'
import { useState, useEffect } from 'react';


const content = {
  0 : <FinnqCard/>,
  1 : <TwoPlusCard/>,
  2 : <WaveCard/>,
  3 : <FinnqCheckCard/>
}

export default function FinnqmarketCard() {
  
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('tabNum')) setActiveTab(urlParams.get('tabNum'));
  }, []);

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
              <p className="title">카드</p>
              <em className="desc">
                오직 핀크에서만 누릴 수 있는 특별한 금융상품
              </em>
            </section>

            <section className="contents-body">
              <article className="tab-wrap">
                <ul>
                  <li className={activeTab == 0 ? 'is-active' : ''} onClick={() => setActiveTab(0)}>
                    <button type="button">핀크카드</button>
                  </li>
                  <li className={activeTab == 1 ? 'is-active' : ''} onClick={() => setActiveTab(1)}>
                    <button type="button">투뿔카드</button>
                  </li>
                  <li className={activeTab == 2 ? 'is-active' : ''} onClick={() => setActiveTab(2)}>
                    <button type="button">웨이브카드</button>
                  </li>
                  <li className={activeTab == 3 ? 'is-active' : ''} onClick={() => setActiveTab(3)}>
                    <button type="button">핀크 체크카드</button>
                  </li>
                </ul>
              </article>
              {content[activeTab]}
              
            </section>
          </div>
        </section>
      </Layout>
    
  )


}

function FinnqCard(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          쓸 만큼만 <br className="mobile" />덜어 쓰는 
          <br />소비습관의 시작
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

function TwoPlusCard(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          혜택이 별거있나
          <br />쓴만큼 적립이
          <br className="mobile" />최고지
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

function WaveCard(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className="visual-title">
          웨이브 구독만 하면 
          <br />누구나 파도치는
          <br />혜택!
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

function FinnqCheckCard(){
  return (
    <article className="contents-details">
      <div className="contents-visual">
        <p className={Styles.product__name}>핀크 체크카드</p>
        <p className="visual-title">
          체크카드의 <br className="mobile" />새로운 기준
          <br />실시간 2%적립
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
>>>>>>> af768b42f6d4c15200335eb459b9ff9d5231984d
