import React, { useEffect, useState } from "react";
import RewordPage1 from "/pages/details/policy/load-reword/RewordPage1";
import RewordPage2 from "/pages/details/policy/load-reword/RewordPage2";

const content = {
  0: <RewordPage1 />,
  1: <RewordPage2 />,
};

const TermsRewordPage = () => {
  const [tabNum, setTabNum] = useState(0);

  const selectClick = () => {
    const selectGroupTag = document.querySelector(".select-group");
    let state = selectGroupTag.classList.contains("is-active");
    if (!state) {
      selectGroupTag.classList.add("is-active");
    } else {
      selectGroupTag.classList.remove("is-active");
    }
  };

  useEffect(() => {
    const selectGroupTag = document.querySelector(".select-group");
    const listLiTag = document.querySelectorAll(".select-list li");
    const selectButtonTag = document.querySelector(".select-button");

    listLiTag.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        setTabNum(i);
        selectButtonTag.textContent = item.textContent;
        selectGroupTag.classList.remove("is-active");
      });
    });
  }, []);

  const rewordDate = ["2018.05.02", "2019.06.01"];

  return (
    <article className="contents-details">
      <div className="notice-wrap width-fix">
        <div className="select-group">
          <div className="select-design">
            <button
              type="button"
              className="select-button"
              onClick={selectClick}
            >
              2018.05.02
            </button>
          </div>
          <ul className="select-list">
            {rewordDate.map((rewordDate, idx) => (
              <li key={idx}>
                <button type="button">{rewordDate}</button>
              </li>
            ))}
          </ul>
        </div>
        <article className="load-area">{content[tabNum]}</article>
      </div>
    </article>
  );
};

export default TermsRewordPage;
