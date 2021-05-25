import Link from "next/link";

export default function Footer() {
  const menuActive = () => {
    document.querySelector(".family-list").classList.toggle("is-active");
  };

  return (
    <footer className="footer">
      <div className="width-fix">
        <ul className="footer-menu">
          <li>
            <a
              href="https://pop.finnq.com/finnq_home/files/Finnq_BI_Guide.pdf"
              target="_blank"
            >
              B.I 가이드
            </a>
          </li>
          <li>
            <a
              href="https://pop.finnq.com/finnq_home/files/Finnq_brand_asset.zip"
              target="_self"
            >
              로고 다운로드
            </a>
          </li>
          <li>
            <Link href="/details/policy/service">서비스이용약관</Link>
          </li>
          <li>
            <Link href="/details/policy/privacy">개인정보처리방침</Link>
          </li>
          <li>
            <Link href="/details/policy/customer-information">
              고객정보취급방침
            </Link>
          </li>
          <li>
            <a href="/details/hfg/vision-group">하나금융그룹</a>
          </li>
        </ul>
        <div className="info">
          <p className="company-title">주식회사 핀크</p>
          <ul className="company-list">
            <li>
              <address>서울시 중구 남대문로9길 40 센터플레이스 22층</address>
            </li>
            <li>대표이사 : 권영탁</li>
            <li>사업자 등록번호 : 299-81-00502</li>
            <li>통신판매업 신고번호 : 제 2017-서울중구-1146호</li>
            <li>
              <a
                href="http://ftc.go.kr/bizCommPop.do?wrkr_no=2998100502"
                target="_blank"
                title="새창 열림"
              >
                사업자정보확인
              </a>
            </li>
            <li>
              <a
                href="https://pop.finnq.com/finnq_home/files/finnq2017.pdf"
                target="_blank"
                title="새창 열기"
              >
                재무제표공고(2017)
              </a>
            </li>
            <li>
              <a
                href="https://pop.finnq.com/finnq_home/files/finnq2018.pdf"
                target="_blank"
                title="새창 열기"
              >
                재무제표공고(2018)
              </a>
            </li>
            <li>
              <a
                href="https://pop.finnq.com/finnq_home/files/finnq2019.pdf"
                target="_blank"
                title="새창 열기"
              >
                재무제표공고(2019)
              </a>
            </li>
            <li>
              <a
                href="https://pop.finnq.com/finnq_home/files/finnq2020.pdf"
                target="_blank"
                title="새창 열기"
              >
                재무제표공고(2020)
              </a>
            </li>
            <li>
              <a href="/policy/announce.html" className="btn-layer">
                선불충전금 운용공시(2021.1Q)
              </a>
            </li>
            <li>호스팅서비스 사업자 : 주식회사 핀크</li>
            <li>고객센터 : 1566-4949</li>
            <li>
              E-mail : <a href="mailto:cs@finnq.co.kr">cs@finnq.co.kr</a>
            </li>
            <li>
              제휴문의 :{" "}
              <a href="mailto:partner@finnq.co.kr">partner@finnq.co.kr</a>
            </li>
          </ul>
          <p className="copyright">Copyright © Finnq Inc.</p>
        </div>
        <div className="family">
          <button type="button" className="btn-family" onClick={menuActive}>
            계열사
          </button>
          <ul className="family-list">
            <li>
              <a href="http://www.hanafn.com" target="_blank" title="새창 열림">
                하나금융그룹
              </a>
            </li>
            <li>
              <a
                href="http://www.kebhana.com"
                target="_blank"
                title="새창 열림"
              >
                하나은행
              </a>
            </li>
            <li>
              <a href="http://www.hanaw.com" target="_blank" title="새창 열림">
                하나금융투자
              </a>
            </li>
            <li>
              <a
                href="http://www.hanacard.co.kr"
                target="_blank"
                title="새창 열림"
              >
                하나카드
              </a>
            </li>
            <li>
              <a
                href="http://www.hanacapital.co.kr"
                target="_blank"
                title="새창 열림"
              >
                하나캐피탈
              </a>
            </li>
            <li>
              <a
                href="http://www.hanalife.co.kr"
                target="_blank"
                title="새창 열림"
              >
                하나생명
              </a>
            </li>
            <li>
              <a
                href="http://www.hanasavings.com"
                target="_blank"
                title="새창 열림"
              >
                하나저축은행
              </a>
            </li>
            <li>
              <a
                href="http://www.hanatrust.com"
                target="_blank"
                title="새창 열림"
              >
                하나자산신탁
              </a>
            </li>
            <li>
              <a
                href="http://www.hana-assetmanagement.com"
                target="_blank"
                title="새창 열림"
              >
                하나대체투자자산운용
              </a>
            </li>
            <li>
              <a
                href="http://www.hanais.co.kr"
                target="_blank"
                title="새창 열림"
              >
                하나펀드서비스
              </a>
            </li>
            <li>
              <a
                href="http://www.hanati.co.kr"
                target="_blank"
                title="새창 열림"
              >
                하나금융티아이
              </a>
            </li>
            <li>
              <a
                href="http://www.hana-nanum.com"
                target="_blank"
                title="새창 열림"
              >
                하나금융나눔재단
              </a>
            </li>
            <li>
              <a
                href="http://www.hanafoundation.or.kr"
                target="_blank"
                title="새창 열림"
              >
                하나금융공익재단
              </a>
            </li>
            <li>
              <a
                href="http://www.hanacarecenter.or.kr"
                target="_blank"
                title="새창 열림"
              >
                하나케어센터
              </a>
            </li>
            <li>
              <a
                href="http://www.hanamiso.org"
                target="_blank"
                title="새창 열림"
              >
                하나미소금융재단
              </a>
            </li>
            <li>
              <a href="http://www.hana.hs.kr" target="_blank" title="새창 열림">
                하나고등학교
              </a>
            </li>
          </ul>
        </div>
        <div className="sns-wrap">
          <ul className="sns-list clearfix">
            <li>
              <a
                href="https://www.facebook.com/Finnq.official/"
                className="btn-sns btn-fb"
                target="_blank"
                title="새창 열림"
              >
                페이스북 공유하기
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/finnq_official/"
                className="btn-sns btn-insta"
                target="_blank"
                title="새창 열림"
              >
                인스타그램 공유하기
              </a>
            </li>
            <li>
              <a
                href="https://post.naver.com/finnq"
                className="btn-sns btn-blog"
                target="_blank"
                title="새창 열림"
              >
                네이버블로그 공유하기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
