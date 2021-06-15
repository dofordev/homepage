import { useEffect, useRef, useState } from "react";
import Layout from "/components/Layout";
import styles from "/styles/Home.module.scss";
import importScript from "/components/ImportScript";
import Image from "next/image";
import styled, { css } from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const registerObserver = (ref, setVisible) => {
  const observer = new IntersectionObserver((enteries, options) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setVisible(true);
      observer.disconnect();
    });
  });

  observer.observe(ref);
};

const videoPlayerFunc = () => {
  let done = false;
  let player;
  let uTubePlayer = {
    settingVideo: function (playerId, videoId, height, width) {
      player = new YT.Player(playerId, {
        height: height,
        width: width,
        videoId: videoId, //'rht_uiteReE',
        events: {
          onReady: uTubePlayer.onPlayerReady,
          onStateChange: uTubePlayer.onPlayerStateChange,
        },
      });
    },
    onPlayerReady: function (event) {
      event.target.playVideo();
    },
    onPlayerStateChange: function (event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        done = true;
      }
    },
    stopVideo: function () {
      player.stopVideo();
    },
  };
};

const MainLayerPop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 5;
`;

export default function Home() {
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    registerObserver(listRef.current, setVisible, {
      // threshold: 0.5,
    });
    setTimeout(function () {
      uTubePlayer.settingVideo("videoplayerframe", "NWOL_URztqc", 960, 540);
    }, 200);
  }, []);

  importScript("/lib/js/widgetapi.min.js");
  importScript("https://www.youtube.com/iframe_api");
  videoPlayerFunc();

  const [showModal, setShowModal] = useState(false);

  function setCookieMobile(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie =
      name +
      "=" +
      escape(value) +
      "; path=/; expires=" +
      todayDate.toGMTString() +
      ";";
  }

  useEffect(() => {
    let cookiedata = document.cookie;
    if (cookiedata.indexOf("todayCookie=done") < 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, []);

  const headleMakeCookie = () => {
    setCookieMobile("todayCookie", "done", 1);
    setShowModal(false);
  };
  const headlePopupClose = () => setShowModal(false);

  return (
    <Layout>
      {showModal && (
        <MainLayerPop>
          <div className={styles["layer-content"]}>
            <div className={styles["layer-img"]}>
              <img src="/images/main/img_main_popup.png" alt=""></img>
            </div>
            <div className="blind">
              <h1>금융위원회 혁신금융 서비스 선정</h1>
              <p>
                핀크가 통신신용평가를 활용하여 대출비교서비스를 제공하는
                혁신금융서비스 사업자로 선정되었습니다. 통신서비스 이용정보를
                통해 더 많은 혜택을, 금융거래 정보가 없는 고객에게 차별 없는
                금융생활을 제공하기 위한 노력의 결과입니다. 오늘의 혁신에 이어
                내일의 혁신도 끊임없이 추구하여 어려운 금융의 벽을 허무는
                도전하는 기업이 되겠습니다. 감사합니다.
              </p>
            </div>
            <div className={styles["btn-wrap"]}>
              <span>
                <button
                  type="button"
                  className={styles["btn-today"]}
                  onClick={headleMakeCookie}
                >
                  오늘 하루 열지 않기
                </button>
              </span>
              <span>
                <button
                  type="button"
                  className={styles["btn-close"]}
                  onClick={headlePopupClose}
                >
                  닫기
                </button>
              </span>
            </div>
          </div>
        </MainLayerPop>
      )}

      <div>
        <section>
          <div className={styles["main-inner"]}>
            <p className={styles["main-title"]}>뱅크 말고, 핀크</p>
            <p className={styles["main-desc"]}>
              앱 하나로 모든 은행계좌 거래 가능!<br></br>차별화된 금융상품과
              서비스 지금 경험해보세요!
            </p>
            <div className={`${styles["main-btn--wrap"]} app-down`}>
              <a
                href="https://play.google.com/store/apps/details?id=com.finnq.f1&referrer=singular_click_id%3D085994d9-bd91-4212-83ec-bfb0460d4f52"
                className={`${styles["main-btn"]} ${styles["btn-google"]}`}
                target="_blank"
              >
                <span>Google Play</span>
              </a>
              <a
                href="https://finnq.sng.link/Alxrp/hlst?_dl=finnq%3A%2F%2F&_fallback_+redirect=https%3A%2F%2Fapps.apple.com%2Fkr%2Fapp%2Fapple-store%2Fid1260871482"
                className={`${styles["main-btn"]} ${styles["btn-apple"]}`}
                target="_blank"
              >
                <span>App Store</span>
              </a>
            </div>
          </div>
        </section>

        <section>
          <article className={styles["main-video--wrap"]}>
            <p className={styles.title}>서비스 소개 영상</p>

            <div className={styles["video-area"]}>
              <div className={styles["video-item"]}>
                <div id="videoplayerframe"></div>
              </div>
            </div>

            <div className={`width-fix`}>
              <ul
                className={`${styles["primary-list"]} ${
                  visible ? styles["is-active"] : ""
                }`}
                ref={listRef}
              >
                <li>
                  <dl className={styles.item1}>
                    <dt className={styles.title}>무료송금</dt>
                    <dd className={styles.text}>
                      한번에 천만원까지<br></br> 보낼 수 있는 무료송금
                    </dd>
                  </dl>
                </li>
                <li className={styles["desc-item2"]}>
                  <dl>
                    <dt className={styles.title}>T스코어 신용관리</dt>
                    <dd className={styles.text}>
                      휴대폰만 잘 써도<br></br> 금융혜택 Get
                    </dd>
                  </dl>
                </li>
                <li className={styles["desc-item3"]}>
                  <dl>
                    <dt className={styles.title}>대출비교</dt>
                    <dd className={styles.text}>
                      신용도 영향없이<br></br> 한번에 금융권 대출 조회
                    </dd>
                  </dl>
                </li>
                <li className={styles["desc-item4"]}>
                  <dl>
                    <dt className={styles.title}>금융상품</dt>
                    <dd className={styles.text}>
                      혜택 많은 금융상품과<br></br> 최고 할인률 기프티콘몰까지
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section
          className={styles["swiper-wrap"]}
          style={{ overflow: "hidden" }}
        >
          <Swiper
            className={`main-swiper width-fix ${styles["swiper-main--custom"]}`}
            // onSlideChange={() => console.log("slide change")}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className={styles["swiper-cont"]}>
                <div className={styles["txt-area"]}>
                  <p className={`txt-animate1 ${styles.desc}`}>
                    <span className={styles["mobile-close"]}>하루에</span>
                    100번을
                    <br className={`mobile ${styles["mobile-close"]}`}></br>
                    송금해도<br></br>
                    <em>송금수수료 0원</em>
                  </p>
                  <p className={`txt-animate3 ${styles["txt-bar"]}`}></p>
                  <p className={`txt-animate2 ${styles.slogan}`}>
                    평생 무제한 <em>무료송금</em>
                  </p>
                </div>
                <div className={styles["swiper-img"]}>
                  <img src="/images/main/img_main_slide1.png" alt=""></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["swiper-cont"]}>
                <div className={styles["txt-area"]}>
                  <p className={`txt-animate1 ${styles.desc}`}>
                    <span className={styles["mobile-close"]}>
                      휴대폰 정보로 평가하는<br></br>
                    </span>
                    핀크만의<br></br>
                    <em>T스코어 신용관리</em>
                  </p>
                  <p className={`txt-animate3 ${styles["txt-bar"]}`}></p>
                  <p className={`txt-animate2 ${styles.slogan}`}>
                    금리 <em>Down</em>, 한도는 <em>UP</em>
                  </p>
                </div>
                <div className={styles["swiper-img"]}>
                  <img src="/images/main/img_main_slide2.png" alt=""></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["swiper-cont"]}>
                <div className={styles["txt-area"]}>
                  <p className={`txt-animate1 ${styles.desc}`}>
                    <a
                      href="https://loan.finnq.com/intro/finnq?pcn=WEB_Bridge"
                      target="_blank"
                    >
                      내가 받을 수 있는<br></br>
                      <em style={{ "font-family": "SpoqaR" }}>
                        가장 낮은 금리<br></br>
                        <span className={styles["arrow-cont"]}>확인</span>
                      </em>
                    </a>
                  </p>
                  <p className={`txt-animate3 ${styles["txt-bar"]}`}></p>
                  <p className={`txt-animate2 ${styles.slogan}`}>
                    <em>빠른</em> 조회, <em>낮은</em> 금리
                  </p>
                </div>
                <div className={styles["swiper-img"]}>
                  <img src="/images/main/img_main_slide3.png" alt=""></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["swiper-cont"]}>
                <div className={styles["txt-area"]}>
                  <p className={`txt-animate1 ${styles.desc}`}>
                    <span className={styles["mobile-close"]}>
                      핀크라서 가능한<br></br>
                    </span>
                    다양한 혜택<br></br>
                    <em>특별한 금융상품</em>
                  </p>
                  <p className={`txt-animate3 ${styles["txt-bar"]}`}></p>
                  <p className={`txt-animate2 ${styles.slogan}`}>
                    <em>연 5%</em> T high5 적금
                  </p>
                </div>
                <div className={styles["swiper-img"]}>
                  <img src="/images/main/img_main_slide4.png" alt=""></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </Layout>
  );
}
