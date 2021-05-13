import { useState, useEffect } from "react";

/**
 * @props : {
 *  activeTab : number - 활성화 탭 index ( default : 0)
 *  list : array<object> - 탭리스트 {title : '핀크카드'}
 *  clickEvent : function - 클릭시 호출될 이벤트
 * }
 */
export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(
    props.activeTab ? props.activeTab : 0
  );

  useEffect(() => {
    const li = document.querySelectorAll(".tab-li");
    li.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        setActiveTab(i);
      });
    });
  }, []);
  return (
    <ul>
      {props.list.map((item, i) => {
        return (
          <li
            className={`tab-li ${activeTab == i ? "is-active" : ""}`}
            onClick={() => {
              props.clickEvent.call(this, i);
            }}
            key={i}
          >
            <button type="button">{item.title}</button>
          </li>
        );
      })}
    </ul>
  );
}
