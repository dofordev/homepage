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

    // https://dwww.finnq.com/api/affiliation/inquiry/mydata

    axios({
      method: "post",
      url: "/api/affiliation/inquiry/mydata",
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
        <article className="key-visual" id={styles["proposal-visual"]}>
          <div className="inner">
            <p className="title">
              <span className={styles.bold}>마이데이터 ADD-ON</span>
            </p>
            <div className="desc">
              고객사의 성공적인 마이데이터 비즈니스를 위해 핀크가 최적의
              솔루션을 제공합니다.
            </div>
            <div className={styles["btn-wrap"]}>
              <button type="button">
                마이데이터 &amp; 핀크리얼리 제휴 문의
              </button>
            </div>
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
                  <article className="desc-info">1</article>
                  <article className="desc-info img-content">2</article>
                </div>
              </section>
              <section className="desc-wrap">
                <div className="item-desc">
                  <article className="desc-info">1</article>
                  <article className="desc-info">2</article>
                </div>
              </section>
              <section className="desc-wrap" id={styles["insert-proposal"]}>
                <div className="item-desc">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <article className={styles.group}>
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
                      <div>
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
                      <div>
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
                      <div>
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
    </Layout>
  );
}
