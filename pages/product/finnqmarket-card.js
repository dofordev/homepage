
import Layout from '../components/Layout'

export default function finnqmarketCard() {
  return (
    <Layout>
    <section className="container">
      <article className="key-visual product">
        <div className="inner">
          <p className="title">차별화된 금융상품</p>
          <p className="desc">
            오직 핀크에서만 누릴 수 있는 특별한 금융상품을 만나보세요!
          </p>
          <div className="btn-wrap app-down">
            <a href="javascript:void(0);" className="btn-google">
              <span>Google Play</span>
            </a>
            <a href="javascript:void(0);" className="btn-apple">
              <span>App Store</span>
            </a>
          </div>
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
              <li className="is-active">
                <button type="button">핀크카드</button>
              </li>
              <li>
                <button type="button">투뿔카드</button>
              </li>
              <li>
                <button type="button">웨이브카드</button>
              </li>
              <li>
                <button type="button">핀크 체크카드</button>
              </li>
            </ul>
          </article>

          <article className="contents-details">
            <div className="contents-visual">
              <p className="visual-title">
                같은 상품을 <br class="mobile"></br>다른 금리로 제공하는
                <br></br>대출 비교 서비스
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
        </section>
      </div>
    </section>
  </Layout>
    
  )
}
