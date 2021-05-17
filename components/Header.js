import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const mobileDimRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(null);

  // window Size 확인
  const getWindowSize = () => {
    setWindowSize(window.innerWidth);
    headerRef.current.classList.remove("fixed");

    console.log(windowSize);

    if (windowSize <= 960) {
      setIsMobile(true);
      // document.querySelector("body").classList.remove("web");
      // document.querySelector("body").classList.add("mobile");
    } else {
      setIsMobile(false);
      // document.querySelector("body").classList.remove("mobile");
      // document.querySelector("body").classList.add("web");
    }
  };
  useEffect(() => {
    getWindowSize();
    window.addEventListener("resize", getWindowSize);
    return () => window.removeEventListener("resize", getWindowSize);
  }, [windowSize]);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      console.log(isMobile);
      // 모바일이 아닌 경우에만 동작
      if (isMobile === false) {
        if (currentPosition <= 0) {
          headerRef.current.classList.remove("fixed");
        } else {
          headerRef.current.classList.add("fixed");
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [windowSize]);

  // Web 메뉴일 때 이벤트 공통(focus, hover)
  const eventIn = () => {
    if (!isMobile) {
      headerRef.current.classList.add("fixed");
    }
  };
  const eventLeave = () => {
    if (!isMobile) {
      headerRef.current.classList.remove("fixed");
    }
  };

  // 모바일 메뉴 클릭 시
  const isMobileMenuOpen = () => {
    mobileNavRef.current.classList.add("is-active");
    mobileDimRef.current.classList.add("is-active");
    document.querySelector("html").classList.add("preventScroll");
  };
  const isMobileMenuClose = () => {
    mobileNavRef.current.classList.remove("is-active");
    mobileDimRef.current.classList.remove("is-active");
    document.querySelector("html").classList.remove("preventScroll");
  };

  return (
    <header
      className="header"
      onMouseEnter={eventIn}
      onMouseLeave={eventLeave}
      onFocus={eventIn}
      onBlur={eventLeave}
      ref={headerRef}
    >
      <div className="width-fix">
        <h1 className="header-logo">
          <a href="/index.html">Finnq</a>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
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
            <li className="cerfi">
              <a href="/cert/cert.html">공동인증센터</a>
            </li>
          </ul>
        </nav>
        <nav className="m-nav">
          <button type="button" className="btn-nav" onClick={isMobileMenuOpen}>
            메뉴
          </button>
        </nav>
        <div className="m-gnb" ref={mobileNavRef}>
          <a href="index.html" className="m-gnb-logo">
            <span className="blind">finnq</span>
          </a>
          <div className="m-gnb-inner">
            <ul>
              <li>
                <a
                  className="menu-title"
                  href="/product/finnqmarket-card.html?tabNum=0&tabItem=0"
                >
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
                  className="btn-sns fb"
                  target="_blank"
                  title="새창 열림"
                >
                  페이스북 공유하기
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/finnq_official/"
                  className="btn-sns insta"
                  target="_blank"
                  title="새창 열림"
                >
                  인스타그램 공유하기
                </a>
              </li>
              <li>
                <a
                  href="https://post.naver.com/finnq"
                  className="btn-sns blog"
                  target="_blank"
                  title="새창 열림"
                >
                  네이버블로그 공유하기
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="m-gnb-close"
            onClick={isMobileMenuClose}
          >
            <span className="blind">닫기</span>
          </button>
        </div>
        <div className="m-gnb-deem" ref={mobileDimRef}></div>
      </div>
    </header>
  );
}
