import Layout from "/components/Layout";
import styles from "/styles/proposal/FinnqProposal.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled, { css } from "styled-components";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function FinnqInsurance() {
  const formRef = useRef(null);
  const btnSubmitRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showSuccessModal, setSuccessShowModal] = useState(false);
  const [sendData, setSendData] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    setSuccessShowModal(true);
    // data.phone = data.phone.replace(/\-/g, "");
    data.agreeCheck = "Y";
    e.target.reset();
    setActiveBtn(false);
    setSendData(data);
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

  useEffect(async () => {
    // console.log(sendData);
    // const result = await fetch("./api/formValues.json");
    // reset(result); // asynchronously reset your form values
  }, [sendData]);

  const layerGuideClose = () => setShowGuideModal(false);
  const layerSuccessClose = () => setSuccessShowModal(false);

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
            <p className="title">보험 맞춤 추천</p>
            <em className="desc">
              오직 핀크에서만 누릴 수 있는 특별한 금융상품
            </em>
          </section>

          <section className="contents-body" id={styles["proposal"]}>
            <article className={`${styles["proposal"]} contents-details`}>
              <div className={`${styles["visual"]} contents-visual`}>
                <article className={styles["swiper-wrap"]}>
                  <a
                    href="#insert-proposal"
                    type="button"
                    className={styles["btn-proposal"]}
                  >
                    마이데이터&middot;핀크 리얼리 제휴 문의
                  </a>

                  <Swiper
                    className={`proposal-swiper width-fix ${styles["swiper-proposal--custom"]}`}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide>
                      <div className={styles["swiper-cont"]}>1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["swiper-cont"]}>2</div>
                    </SwiperSlide>
                  </Swiper>
                </article>
              </div>

              <section className="desc-wrap">
                <div className="item-desc top">
                  <article className="desc-info">
                    <p className="sub-title">
                      20만명 빅데이터 기반으로<br></br>꼭 필요한 보험만 추천!
                    </p>
                    <p className="sub-desc">
                      10명의 고객 중 9.4명이 추천 결과에 만족
                    </p>
                    <div className="img-wrap">
                      <img
                        src="/images/product/insurance/img_insurance1.png"
                        alt=""
                      ></img>
                    </div>
                  </article>
                  <article className="desc-info img-content">
                    <p className="sub-title">
                      원하는 보험군만 골라서<br></br>원하는 가격대로 설정!
                    </p>
                    <p className="sub-desc">
                      총 203,476명의 고객이<br></br>매월 불필요한 보험료
                      15,376원 절감
                    </p>
                    <div className="img-wrap">
                      <img
                        src="/images/product/insurance/img_insurance2.png"
                        alt=""
                      ></img>
                    </div>
                  </article>
                </div>
              </section>
              <section className="desc-wrap">
                <div className="item-desc">
                  <article className="desc-info">
                    <p className="sub-title">
                      정보를 쉽게 제공하고,<br></br>전문가의 무료 설명까지!
                    </p>
                    <p className="sub-desc">
                      궁금한 것 부담 없이 물어보면서<br></br> 나에게 딱 맞는
                      플랜 설계
                    </p>
                  </article>
                  <article className="desc-info">
                    <div className="img-wrap">
                      <img
                        src="/images/product/insurance/img_insurance3.png"
                        alt=""
                      ></img>
                    </div>
                  </article>
                </div>
              </section>
              <section className="desc-wrap" id="insert-proposal">
                <div className="item-desc">
                  <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div>
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
                    {/* 
                    <div>
                      <label htmlFor="userName">성명</label>
                      <input
                        type="text"
                        id="userName"
                        {...register("userName", {
                          required: "성명을 입력해주세요",
                        })}
                        className={styles["input-txt"]}
                        placeholder="김핀크"
                      ></input>
                      {errors.userName && (
                        <p className={styles["error-message"]}>
                          {errors.userName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone">전화번호</label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: true,
                          maxLength: 13,
                          // pattern: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                        })}
                        maxLength="13"
                        className={styles["input-txt"]}
                        placeholder="010-1234-5678"
                      ></input>
                      {errors.phone && errors.phone.type === "required" && (
                        <p className={styles["error-message"]}>
                          전화번호을 입력해주세요
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email">이메일</label>
                      <input
                        type="text"
                        id="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                        className={styles["input-txt"]}
                        placeholder="info@finnq.com"
                      ></input>
                      {errors.email && errors.email.type === "required" && (
                        <p className={styles["error-message"]}>
                          이메일을 입력해주세요
                        </p>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <p className={styles["error-message"]}>
                          올바른 이메일을 입력해주세요
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="inquire">문의사항</label>
                      <textarea
                        cols="30"
                        rows="5"
                        id="inquire"
                        {...register("inquire", {
                          required: "문의사항을 입력해주세요",
                        })}
                        placeholder="문의 내용을 입력해주세요. (개인정보 기입은 삼가해주세요)"
                      ></textarea>
                      {errors.inquire && (
                        <p className={styles["error-message"]}>
                          {errors.inquire.message}
                        </p>
                      )}
                    </div>
                    */}
                    <div>
                      <label
                        htmlFor="agreeCheck"
                        className={styles["checkbox--wrap"]}
                      >
                        <input
                          type="checkbox"
                          {...register("agreeCheck", { required: true })}
                          className="custom-checkbox"
                          id="agreeCheck"
                          onClick={handleCheckbox}
                        ></input>
                        <span className={styles["custom-checkbox"]}></span>
                        개인정보 보호 정책에 동의합니다.
                      </label>
                      <button
                        type="submit"
                        className={styles["btn-data--submit"]}
                        disabled={!activeBtn}
                        ref={btnSubmitRef}
                      >
                        문의하기
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  );
}
