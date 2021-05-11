export default function Header() {
  const mouseEnter = () => {
    document.querySelector("header").classList.add("fixed");
  };
  const mouseLeave = () => {
    document.querySelector("header").classList.remove("fixed");
  };

  return (
    <header
      className="header"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="width-fix">
        <h1 className="header-logo">
          <a href="/index.html">Finnq</a>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="finnqmarket">
              <a href="/product/finnqmarket-card.html?tabNum=0&tabItem=0">
                카드
              </a>
            </li>
            <li className="finnqmarket">
              <a href="/product/finnqmarket-saving.html?tabNum=0&tabItem=0">
                예적금
              </a>
            </li>
            <li className="finnqmarket">
              <a href="/product/finnqmarket-loan.html?tabNum=0&tabItem=0">
                대출
              </a>
            </li>
            <li className="finnqmarket">
              <a
                href="https://loan.finnq.com/intro/finnq?pcn=WEB_Bridge"
                target="_blank"
              >
                대출금리비교<i className="new"></i>
              </a>
            </li>
            <li className="finnqmarket">
              <a href="/product/finnqmarket-insurance.html?tabNum=0&tabItem=0">
                보험 맞춤 추천
              </a>
            </li>
            <li className="cerfi">
              <a href="/cert/cert.html">공동인증센터</a>
            </li>
          </ul>
        </nav>
        <nav className="m-nav">
          <button type="button" className="btn-nav">
            메뉴
          </button>
        </nav>
        <div className="m-gnb">
          <a href="index.html" className="m-gnb-logo">
            <span className="blind">finnq</span>
          </a>
          <div className="m-gnb-inner">
            <ul>
              <li>
                <a href="/product/finnqmarket-card.html?tabNum=0&tabItem=0">
                  금융상품
                </a>
                <ul className="m-sub-menu">
                  <li>
                    <a href="/product/finnqmarket-card.html?tabNum=0&tabItem=0">
                      카드
                    </a>
                  </li>
                  <li>
                    <a href="/product/finnqmarket-saving.html?tabNum=0&tabItem=0">
                      예적금
                    </a>
                  </li>
                  <li>
                    <a href="/product/finnqmarket-loan.html?tabNum=0&tabItem=0">
                      대출
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://loan.finnq.com/intro/finnq?pcn=WEB_Bridge"
                      target="_blank"
                    >
                      대출금리비교<i className="new"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/product/finnqmarket-insurance.html?tabNum=0&tabItem=0">
                      보험 맞춤 추천
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="m-sns">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Finnq.official/"
                  className="btn-gnb-fb"
                  target="_blank"
                  title="새창 열림"
                >
                  페이스북 공유하기
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/finnq_official/"
                  className="btn-gnb-insta"
                  target="_blank"
                  title="새창 열림"
                >
                  인스타그램 공유하기
                </a>
              </li>
              <li>
                <a
                  href="https://post.naver.com/finnq"
                  className="btn-gnb-blog"
                  target="_blank"
                  title="새창 열림"
                >
                  네이버블로그 공유하기
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="m-gnb-close">
            <span className="blind">닫기</span>
          </button>
        </div>
        <div className="m-gnb-deem"></div>
      </div>
    </header>
  );
}
