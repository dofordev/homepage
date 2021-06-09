import React from "react";

// 메인 페이지는 메인 페이지에서 링크 수정.
// 그 외 페이지는 해당 component로 관리
const BtnAppDown = () => {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.finnq.f1&referrer=singular_click_id%3D085994d9-bd91-4212-83ec-bfb0460d4f52"
        className="btn btn-google"
        target="_blank"
      >
        <span>Google Play</span>
      </a>
      <a
        href="https://finnq.sng.link/Alxrp/hlst?_dl=finnq%3A%2F%2F&_fallback_+redirect=https%3A%2F%2Fapps.apple.com%2Fkr%2Fapp%2Fapple-store%2Fid1260871482"
        className="btn btn-apple"
        target="_blank"
      >
        <span>App Store</span>
      </a>
    </>
  );
};

export default BtnAppDown;
