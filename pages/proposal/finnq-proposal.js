import Layout from "/components/Layout";
import styles from "/styles/proposal/FinnqProposal.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled, { css } from "styled-components";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function FinnqInsurance() {
  const btnSubmitRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showSuccessModal, setSuccessShowModal] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data, e) => {
    data.phoneNumber = data.phoneNumber.replace(/\-/g, "");
    data.agreementYn = "Y";
    setActiveBtn(false);

    axios({
      method: "post",
      url: "https://dwww.finnq.com/api/affiliation/inquiry/mydata",
      data: { data },
    })
      .then(function (response) {
        setSuccessShowModal(true);
        console.log("Success ========>", response);
      })
      .catch(function (error) {
        console.log("Error ========>", error);
      });

    reset();
  };

  const handleCheckbox = (e) => {
    const checkValue = e.target.checked;
    console.log(checkValue);
    if (checkValue === true) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const layerGuideOpen = () => setShowGuideModal(true);
  const layerGuideClose = () => setShowGuideModal(false);
  const layerSuccessClose = () => setSuccessShowModal(false);

  const insetFormRef = useRef(null);
  const menuMoveScroll = () => {
    const location = insetFormRef.current.offsetTop;
    scrollTo({ top: location, behavior: "smooth" });
  };

  const LayerGuidePop = styled.div`
    position: fixed;
    top: 300px;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 5;
  `;

  const LayerSuccessPop = styled.div`
    position: fixed;
    top: 300px;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 5;
  `;

  return (
    <Layout>
      <section className="container">
        <article className="key-visual proposal">
          <div className="inner">
            <p className="title">
              <span className={styles.bold}>마이데이터 ADD-ON</span>
            </p>
            <div className="desc">
              고객사의 성공적인 마이데이터 비즈니스를 위해 핀크가 최적의
              솔루션을 제공합니다.
            </div>
            <div className={styles["btn-proposal--wrap"]}>
              <button
                type="button"
                className={styles["btn-proposal"]}
                onClick={menuMoveScroll}
              >
                마이데이터 &amp; 핀크리얼리 제휴 문의
              </button>
            </div>
          </div>
        </article>

        <div className="contents" id={styles["proposal-contents"]}>
          <section className="contents-body" id={styles["proposal-body"]}>
            <article className={`${styles["proposal"]} contents-details`}>
              <section className="desc-wrap" id={styles["swiper-content"]}>
                <article className={styles["swiper-wrap"]}>
                  <Swiper
                    className={`proposal-swiper width-fix ${styles["swiper-proposal--custom"]}`}
                    pagination={{ clickable: true }}
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
                            통합 자산 관리 서비스
                          </p>
                          <p className={`txt-animate2 ${styles.text}`}>
                            흩어진 자산을
                          </p>
                          <p className={`txt-animate3 ${styles.text}`}>
                            <span className={styles.bold}>
                              한 눈에 모아보는<br></br> 내 돈 관리
                            </span>
                          </p>
                        </div>
                        <div className={styles["swiper-img"]}>
                          <img
                            src="/images/proposal/img_keyscreen_01.png"
                            alt=""
                          ></img>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["swiper-cont"]}>
                        <div className={styles["txt-area"]}>
                          <p className={`txt-animate1 ${styles.desc}`}>
                            핀크 리얼리 Real:Re
                          </p>
                          <p className={`txt-animate2 ${styles.text}`}>
                            금융 고수들의<br></br>
                            REAL한 금융생활을 엿보는
                          </p>
                          <p className={`txt-animate3 ${styles.text}`}>
                            <span className={styles.bold}>
                              게임형 금융 SNS 서비스
                            </span>
                          </p>
                        </div>
                        <div className={styles["swiper-img"]}>
                          <img
                            src="/images/proposal/img_keyscreen_02.png"
                            alt=""
                          ></img>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </article>
              </section>

              <section className="desc-wrap">
                <div className="width-fix" id={styles["proposal-desc"]}>
                  <p className={styles.title}>
                    금융 기술력과 경험을 갖춘 핀크의 전문 IT인력으로 최고 수준의
                    솔루션을 제공합니다.
                  </p>
                  <article className={styles["split-desc"]}>
                    <div className={styles["box-cont"]}>
                      <p className={styles["text"]}>
                        간편한 Web View 방식으로<br></br>
                        고객사 서비스에 빠르게 연결
                      </p>
                    </div>
                    <div className={styles["box-cont"]}>
                      <p className={styles["text"]}>
                        고객사 서비스에 최적화한<br></br>
                        Customized된 UI/UX 제공
                      </p>
                    </div>
                  </article>

                  <article>
                    <p className={styles["sub-title"]}>Find your solutions</p>
                    <p className={styles.title}>
                      혁신적인 핀크 마이데이터 ADD-ON 상품을 만나보세요.
                    </p>
                    <ul className={styles["product-list"]}>
                      <li>
                        <div className={styles["product-detail"]}>
                          <div className={styles["product-text"]}>
                            <mark>01</mark>
                            <p>
                              마이데이터 자산관리<br></br>&amp; <br></br>
                              핀크리얼리 Real:Re 통합 서비스
                            </p>
                          </div>
                          <div className={styles["product-img"]}>
                            <img
                              src="/images/proposal/img_info_service_01.jpg"
                              alt=""
                              style={{ width: "100%" }}
                            ></img>
                          </div>
                        </div>
                        <p className={styles["add-text"]}>
                          고객 맞춤형 통합 자산 서비스와
                          <br></br> 특허를 받은 핀크 리얼리 서비스를<br></br>
                          한번에 제공합니다.
                        </p>
                      </li>
                      <li>
                        <div className={styles["product-detail"]}>
                          <div className={styles["product-text"]}>
                            <mark>02</mark>
                            <p>
                              마이데이터 자산관리<br></br>
                              서비스
                            </p>
                          </div>
                          <div className={styles["product-img"]}>
                            <img
                              src="/images/proposal/img_info_service_02.jpg"
                              alt=""
                              style={{ width: "100%" }}
                            ></img>
                          </div>
                        </div>
                        <p className={styles["add-text"]}>
                          은행, 카드, 증권, 보험, 대출 등<br></br> 모든 자산을
                          한눈에 조회할 수 있는 서비스입니다.
                        </p>
                      </li>
                      <li>
                        <div className={styles["product-detail"]}>
                          <div className={styles["product-text"]}>
                            <mark>03</mark>
                            <p>
                              핀크리얼리 Real:Re<br></br>
                              서비스
                            </p>
                          </div>
                          <div className={styles["product-img"]}>
                            <img
                              src="/images/proposal/img_info_service_03.jpg"
                              alt=""
                              style={{ width: "100%" }}
                            ></img>
                          </div>
                        </div>
                        <p className={styles["add-text"]}>
                          금융에 SNS(사회관계망서비스)와
                          <br></br> 게임을 최초로 접목한 금융 서비스를
                          제공합니다.
                        </p>
                      </li>
                    </ul>
                  </article>
                </div>
              </section>

              <section
                className="desc-wrap"
                id={styles["insert-proposal"]}
                ref={insetFormRef}
              >
                <div className="width-fix">
                  <p className={styles.title}>
                    문의사항을 남겨주시면 빠른 시일 내 연락드리겠습니다.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <article className={styles.group}>
                      <div className={styles.item}>
                        <label htmlFor="companyName">회사명/담당부서명</label>
                        <input
                          type="text"
                          id="companyName"
                          {...register("companyName", {
                            required: "회사명/담당자명을 입력해주세요",
                          })}
                          className={styles["input-txt"]}
                          placeholder="(예) 핀크/신규사업팀"
                        ></input>
                        {errors.companyName && (
                          <p className={styles["error-message"]}>
                            {errors.companyName.message}
                          </p>
                        )}
                      </div>
                      <div className={styles.item}>
                        <label htmlFor="name">성명</label>
                        <input
                          type="text"
                          id="name"
                          {...register("name", {
                            required: "성명을 입력해주세요",
                          })}
                          className={styles["input-txt"]}
                          placeholder="김핀크"
                        ></input>
                        {errors.name && (
                          <p className={styles["error-message"]}>
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className={styles.item}>
                        <label htmlFor="phoneNumber">전화번호</label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          {...register("phoneNumber", {
                            required: true,
                            maxLength: 13,
                            // pattern: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                          })}
                          maxLength="13"
                          className={styles["input-txt"]}
                          placeholder="010-1234-5678"
                        ></input>
                        {errors.phoneNumber &&
                          errors.phoneNumber.type === "required" && (
                            <p className={styles["error-message"]}>
                              전화번호을 입력해주세요
                            </p>
                          )}
                      </div>
                      <div className={styles.item}>
                        <label htmlFor="emailAddress">이메일</label>
                        <input
                          type="text"
                          id="emailAddress"
                          {...register("emailAddress", {
                            required: true,
                            pattern:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          })}
                          className={styles["input-txt"]}
                          placeholder="info@finnq.com"
                        ></input>
                        {errors.emailAddress &&
                          errors.emailAddress.type === "required" && (
                            <p className={styles["error-message"]}>
                              이메일을 입력해주세요
                            </p>
                          )}
                        {errors.emailAddress &&
                          errors.emailAddress.type === "pattern" && (
                            <p className={styles["error-message"]}>
                              올바른 이메일을 입력해주세요
                            </p>
                          )}
                      </div>
                    </article>
                    <article>
                      <div className={styles.item}>
                        <label htmlFor="contents">문의사항</label>
                        <textarea
                          cols="30"
                          rows="5"
                          id="contents"
                          {...register("contents", {
                            required: "문의사항을 입력해주세요",
                          })}
                          placeholder="문의 내용을 입력해주세요. (개인정보 기입은 삼가해주세요)"
                        ></textarea>
                        {errors.contents && (
                          <p className={styles["error-message"]}>
                            {errors.contents.message}
                          </p>
                        )}
                      </div>
                    </article>
                    <article className={styles["check-area"]}>
                      <label
                        htmlFor="agreementYn"
                        className={styles["checkbox--wrap"]}
                      >
                        <input
                          type="checkbox"
                          {...register("agreementYn", { required: true })}
                          className="custom-checkbox"
                          id="agreementYn"
                          onClick={handleCheckbox}
                        ></input>
                        개인정보 보호 정책에 동의합니다.
                        <button
                          type="button"
                          onClick={layerGuideOpen}
                          className={styles["btn-layer--open"]}
                        >
                          자세히 보기
                        </button>
                      </label>

                      <button
                        type="submit"
                        className={styles["btn-data--submit"]}
                        disabled={!activeBtn}
                        ref={btnSubmitRef}
                      >
                        문의하기
                      </button>
                    </article>
                  </form>
                </div>
              </section>
            </article>
          </section>
        </div>
      </section>
      {showGuideModal && (
        <LayerGuidePop>
          <div className={styles["layer-guide--content"]}>
            <h1>개인정보 수집 및 이용에 관한 동의</h1>
            <p>※아래 주의사항을 확인해 주시기 바랍니다.</p>
            <ul>
              <li>
                1. 수집하는 개인정보 항목 : 회사/부서명, 성명, 전화번호, 이메일
              </li>
              <li>2. 수집 및 이용 목적 : 문의 내용 확인, 접수 및 답변 회신</li>
              <li>
                3. 보유 및 이용 기간 : 문의에 대한 서비스 목적 달성 후 즉시 폐기
              </li>
            </ul>
            <button
              type="button"
              className={styles["btn-layer"]}
              onClick={layerGuideClose}
            >
              확인
            </button>
          </div>
        </LayerGuidePop>
      )}
      {showSuccessModal && (
        <LayerSuccessPop>
          <div className={styles["layer-success--content"]}>
            <p>성공적으로 완료했습니다.</p>
            <button
              type="button"
              className={styles["btn-layer"]}
              onClick={layerSuccessClose}
            >
              확인
            </button>
          </div>
        </LayerSuccessPop>
      )}
    </Layout>
  );
}
