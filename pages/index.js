import { useEffect, useRef, useState } from "react";
import Layout from "/components/Layout";
import styles from "/styles/Home.module.scss";
import importScript from "/components/ImportScript";
import Image from "next/image";

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

  return (
    <Layout>
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
                href="#none"
                className={`${styles["main-btn"]} ${styles["btn-google"]}`}
              >
                <span>Google Play</span>
              </a>
              <a
                href="#none"
                className={`${styles["main-btn"]} ${styles["btn-apple"]}`}
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

        <section className={styles["swiper-wrap"]}>
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
