import React from "react";
import styles from "/styles/policy/FinnqPolicy.module.scss";

const TermsSendPage = () => {
  return (
    <article className={`${styles["terms"]} contents-details`}>
      <div className="notice-wrap width-fix">
        <p className="title">이용약관</p>
        <p className="sub-text">제1조 (목적 및 서비스의 내용)</p>
        <ol className="depth01">
          <li>
            ① 본 약관은 주식회사 핀크(이하 ‘회사’라 합니다)와 회사가 이용자에게
            제공하는 ‘소액해외송금서비스’(이하 ‘서비스’라 합니다)에 관한 회사와
            이용자간 또는 이용자 간의 권리 및 의무, 책임사항, 서비스 이용조건,
            절차 등 기본적인 사항을 정함으로써, 거래의 신속하고 효율적인 처리를
            도모하고 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을
            목적으로 합니다.
          </li>
          <li>
            ② 이 서비스는 핀크 앱을 이용하여 송금인은 수취인의 휴대폰번호 등을
            입력하여 송금 신청하고, 수취인은 문자(SMS 또는 Push, 이하
            같습니다)메시지로 통지 받은 내역에 따라 원하는 수취방법을 선택하여
            송금금액을 수취할 수 있는 해외송금서비스입니다.
          </li>
        </ol>

        <p className="sub-text">제2조 (용어의 정의)</p>
        <ol className="depth01">
          <li>
            ① 본 약관에서 사용하는 용어의 의미는 다음 각 호와 같습니다.
            <ol className="depth02">
              <li>
                1. “이용자”라 함은 소액해외송금을 위하여 회사와 체결한 계약(이하
                "소액해외송금서비스 계약"이라 합니다)에 따라
                소액해외송금서비스를 이용하는 이용자를 말합니다.
              </li>
              <li>
                2. “소액해외송금”이라 함은 이용자가 송금인의 인적사항 등
                기본정보, 송금사유, 수취인과 수취은행 등의 정보 등과 같은
                해외송금 신청에 필요한 정보를 전자적 장치로 입력하고
                해외송금전용계좌에 입금하면, 회사는 입금액 전체를 즉시 출금하여
                수수료를 차감한 금액을 외화로 환전하여 이용자가 사전에 등록한
                해외송금수취인에게 송금처리 하는 것을 말합니다.
              </li>
              <li>
                3. “전자적 장치”라 함은 현금자동지급기, 자동입출금기,
                지급용단말기, 컴퓨터, 전화기 그 밖에 전자적 방법으로
                소액해외송금정보를 전송하거나 처리하는데 이용되는 장치를
                말합니다.
              </li>
              <li>
                4. “비밀번호”란 이용자의 동일성 식별과 이용자 정보의 보호를
                위하여 이용자가 설정하고 회사가 승인한 숫자의 조합, 숫자와
                문자의 조합 등을 의미하며, 본 항 제8호에서 정한 PIN을
                포함합니다.
              </li>
              <li>
                5. “전자문서”라 함은 「전자문서 및 전자거래기본법」 제2조
                제1호의 규정에 따라 작성, 송신·수신 또는 저장된 정보를 말합니다.
              </li>
              <li>
                6. “거래지시”라 함은 이용자가 본 약관에 따라 “회사”에
                “소액해외송금”의 처리를 지시하는 것을 말합니다.
              </li>
              <li>
                7. “핀크 앱”이라 함은 스마트폰, 태블릿PC 등 휴대용 단말기(이하
                "모바일 디바이스"라 합니다)에 설치되어 회사가 제공하는 서비스를
                이용자가 이용할 수 있게 하는 애플리케이션을 말합니다.
              </li>
              <li>
                8. "PIN"이란 이용자가 서비스를 이용하기 위하여 본인 확인 및
                식별, 거래 승인을 위하여 직접 설정하고 핀크 앱에 직접 입력하는
                숫자와 문자의 조합 또는 그에 상응하는 수단을 말합니다.
              </li>
              <li>
                9. “수수료”란 회사의 서비스를 이용하는 과정에서 회사가 정하는
                기준에 따라 이용자에게 부과하는 비용을 말합니다.
              </li>
            </ol>
          </li>
          <li>
            ② 본 약관에서 별도로 정하지 아니한 용어는 「외국환거래법」,
            「전자금융거래법」 및 관계 법령 등에서 정하는 바에 따릅니다.
          </li>
        </ol>

        <p className="sub-text">제3조 (실명거래)</p>
        <p>
          이용자는 회사와의 소액해외송금 거래 시 반드시 실명으로 거래하여야
          하며, 회사가 실명확인을 위해 이용자에게 실명확인증표, 영상통화 등을
          통한 「금융실명거래 및 비밀보장에 관한 법률」의 실지명의 확인에 필요한
          자료나 절차를 요구할 경우에 이에 따르기로 합니다.
        </p>

        <p className="sub-text">제4조 (소액해외송금 및 거래의 제한) </p>
        <ol className="depth01">
          <li>
            ① 회사는 이용자가 따로 요청하지 않는 한 해외 수취인측 사업자(해외
            환거래은행, 해외 송금사업자 등, 이하 같습니다.)는 회사가 선정하기로
            하며, 지급지시 등을 함에 있어서 통상어, 부호, 암호 등을 정하여
            사용할 수 있습니다.
          </li>
          <li>
            ② 이용자는 송금 신청거래를 마친 때 제공되는 지급지시서 사본 등으로
            송금내용이 정확한가를 확인하여야 합니다.
          </li>
          <li>
            ③ 신청인이 송금신청을 철회하는 경우 회사는 해외 수취인측
            사업자로부터 실제 반환 받은 금액에서 송금신청 당시 기 공지한 회사 및
            해외수취인측 사업자의 모든 비용을 뺀 외화금액 또는 회사가 핀크앱에
            고시한 지급시점의 대고객전신환매입율에 의한 원화금액으로 지급합니다.
          </li>
          <li>
            ④ 다음 각 호에 해당하는 경우에는 소액해외송금의 해당 지시에 따른
            거래를 제한할 수 있습니다.
            <ol className="depth02">
              <li>
                1. 이용자가 설정한 송금한도를 초과하거나 본 약관 제5조에 규정된
                한도를 초과하거나, 관련 법령 상의 한도가 초과된 경우
              </li>
              <li>2. PIN을 누적하여 연속 5회 이상 오류 입력하는 경우</li>
              <li>
                3. 회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인
                방법으로 서비스를 이용하거나 회사의 시스템에 접근하는 행위
              </li>
              <li>
                4. 타인의 명의, 카드정보, 계좌정보 등을 도용하여 회사가 제공하는
                서비스를 이용하는 행위{" "}
              </li>
              <li>5. 이용자가 회사의 서비스 운영을 고의로 방해하는 경우 </li>
              <li>
                6. 다른 이용자의 정당한 이익을 침해하거나 법령에 위배되는 행위를
                한 경우{" "}
              </li>
              <li>7. 본 약관 및 회사의 이용정책에 위반되는 행위를 한 경우 </li>
              <li>
                8. 금융정보분석원에서 고시하는 「자금세탁방지 및
                공중협박자금조달방지에 관한 업무규정」(금융정보분석원 고시)
                제3장에 따른 고객확인 결과 송금이 부적절한 경우 등 기타
                관계법령에서 정하고 있는 거래정지 사유 등이 발생한 경우{" "}
              </li>
            </ol>
          </li>
          <li>
            ⑤ 회사가 제4항에 의해 소액해외송금을 제한한 경우에는 이용자의
            거래지시가 있을 때 해당 전자적 장치를 통하여 그 사유를 알려야
            합니다.{" "}
          </li>
        </ol>

        <p className="sub-text">제5조 (송금한도) </p>
        <ol className="depth01">
          <li>
            ① 이용자가 본 서비스를 통해 송금할 수 있는 한도는 다음 각호와
            같습니다.
            <ol className="depth02">
              <li>1. 건당 지급 및 수령한도는 각각 미화 3천달러 </li>
              <li>2. 연간 지급 및 수령 누계 한도는 각각 미화 2만달러</li>
            </ol>
          </li>
        </ol>

        <p className="sub-text">제6조 (지정계좌)</p>
        <ol className="depth01">
          <li>
            ① 회사는 ‘소액해외송금업무에 사용할 계좌인 것으로 소액해외송금업
            등록(변경등록 포함) 당시 지정한 회사명의의 금융회사개설 계좌’(이하
            ‘지정계좌’라 합니다)를 통해서만 고객에게 자금을 지급하거나
            고객으로부터 자금을 수령할 수 있습니다.
          </li>
          <li>
            ② 회사는 제1항의 지정계좌에 관한 내용을 회사 홈페이지 등에 개시하고
            이를 최신내용으로 관리하여야 합니다.
          </li>
        </ol>

        <p className="sub-text">제7조 (수수료)</p>
        <ol className="depth01">
          <li>
            ① 이용자로부터 본 서비스 이용신청을 받은 경우 이용자가 부담하는
            수수료에 관한 사항을 환전수수료, 송금수수료, 외국 협력업자 지급
            수수료 등 세부 구성항목별로 구분하여 그 내역을 이용자에게 제공하여야
            합니다.
          </li>
          <li>
            ② 회사는 수수료에 관한 사항을 핀크 앱 등에 게시하고 이를 최신
            내용으로 관리하여야 합니다.
          </li>
          <li>
            ③ 이용자는 서비스를 이용한 경우 그에 따라 수수료 기타 비용을
            부담합니다. 단, 회사 또는 회사의 협력업체의 귀책으로 발생한 수수료와
            기타 비용은 이용자가 부담하지 아니합니다.
          </li>
        </ol>

        <p className="sub-text">제8조 (적용환율)</p>
        <ol className="depth01">
          <li>
            ① 회사는 이용자로부터 본 서비스 이용신청을 받은 경우 이용자에게
            적용할 환율에 관한 사항을 제공하여야 합니다.
          </li>
          <li>
            ② 회사는 이용자에게 적용할 환율에 관한 사항을 핀크 앱 등에 게시하고
            이를 최신내용으로 관리하여야 합니다.
          </li>
        </ol>

        <p className="sub-text">제9조 (지급∙수령금액)</p>
        <ol className="depth01">
          <li>
            ① 회사는 본 서비스를 신청한 고객이 지정계좌에 입금할 경우 수수료를
            차감한 금액을 외화로 환전하여 고객이 요청한 수취인에게 송금처리를
            하여야 합니다.
          </li>
          <li>
            ② 회사는 고객으로부터 본 서비스 이용신청을 받은 경우 고객이
            지급∙수령하는 자금의 원화표시 및 외화표시 금액에 관한 사항을
            고객에게 제공하여야 합니다.
          </li>
        </ol>

        <p className="sub-text">제10조 (소요기간)</p>
        <ol className="depth01">
          <li>
            ① 회사는 이용자로부터 본 서비스 이용신청을 받은 경우 이용자에게 지급
            또는 수령에 소요되는 예상 기간에 관한 사항을 제공하여야 합니다.
          </li>
          <li>
            ② 회사는 본 서비스를 이용할 경우 지급 또는 수령에 소요되는 예상
            기간에 관한 사항을 핀크 앱 등에 게시하고 이를 최신내용으로
            관리하여야 합니다.
          </li>
        </ol>

        <p className="sub-text">제11조 (송금의 변경∙취소)</p>
        <ol className="depth01">
          <li>
            ① 이용자는 본 서비스를 신청하여 송금처리가 완료(수취인 계좌에 정상
            입금되는 등)되지 않은 건에 대하여 핀크 앱, 유선, 회사 고객센터 등을
            통하여 회사에 변경 또는 취소를 신청할 수 있습니다. 다만 수취인
            계좌에 정상 입금되는 등 송금처리가 완료된 건에 대해서는 변경 또는
            취소를 신청할 수 없습니다.
          </li>
          <li>
            ② 회사는 이용자로부터 송금신청건에 대한 변경 또는 취소를 요청 받은
            경우 해당 요청사항을 처리하고 그 결과를 이용자에게 통보하여야
            합니다.
          </li>
          <li>
            ③ 수취인이 해외 수취인측 사업자의 영업일 기준으로 7일이 지나도록
            수취확인을 하지 않은 경우 회사는 송금인이 등록한 출금계좌로 반환할
            수 있습니다. 다만, 송금인이 반환을 신청하는 경우에는 이미 등록한
            출금계좌 중에서 반환 받을 계좌를 지정할 수 있습니다.
          </li>
        </ol>

        <p className="sub-text">제12조 (송금결과의 통보)</p>
        <p>
          회사는 수취인 계좌에 정상 입금되는 등 송금처리가 완료된 경우 즉시 그
          결과를 이용자가 사전에 등록한 핀크앱 등 이용자가 사전에 지정한 방법을
          통하여 이용자에게 통지하여 합니다.
        </p>

        <p className="sub-text">제13조 (손해배상 및 면책)</p>
        <ol className="depth01">
          <li>
            ① 회사의 책임있는 사유로 인하여 이용자에게 손해가 발생한 경우 회사의
            손해배상 범위는 민법에서 정하고 있는 통상손해를 포함하고, 특별한
            사정으로 인한 손해(특별손해)는 회사가 그 사정을 알았거나 알 수
            있었을 때에 한하여 배상책임이 있습니다.
          </li>
          <li>
            ② 회사는 이용자로부터 접근매체의 분실이나 도난의 통지를 받은 후에
            제3자가 그 접근매체를 사용하여 이용자에게 손해가 발생한 경우 그
            손해를 배상합니다.
          </li>
          <li>
            ③ 회사는 다음 각 호의 1의 사고로 인하여 이용자에게 손해가 발생한
            경우 그 손해를 배상합니다.
            <ol className="depth02">
              <li>1. 접근매체의 위조나 변조로 발생한 사고</li>
              <li>
                2. 계약체결 또는 거래지시의 전자적 전송이나 처리과정에서 발생한
                사고
              </li>
              <li>
                3. 전자금융거래를 위한 전자적 장치 또는 「정보통신망 이용촉진 및
                정보보호 등에 관한 법률」 제2조 제1항 제1호에 따른 회사의
                정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한
                접근매체의 이용으로 발생한 사고
              </li>
            </ol>
          </li>
          <li>
            ④ 제2항 및 제3항에 의하여 금전적 손해가 발생한 경우 해당 금액 및
            이에 대한 1년 만기 정기예금 이율로 계산한 경과이자를 배상합니다.
            다만, 손해액이 해당 금액과 1년 만기 정기예금 이율로 계산한 금액을
            초과하는 경우에는 실손해액을 배상합니다.
          </li>
          <li>
            ⑤ 제3항의 규정에도 불구하고 회사는 이용자가 고의 또는 중과실로 다음
            각 호의 행위를 하였음을 증명하는 경우 이용자에게 손해가 생기더라도
            책임의 전부 또는 일부를 지지 아니합니다.
            <ol className="depth02">
              <li>
                1. 이용자가 접근매체를 제3자에게 대여하거나 사용을 위임한 경우
                또는 양도나 담보의 목적으로 제공한
                경우(「전자금융거래법」제18조에 따라 선불전자지급수단이나
                전자화폐를 양도하거나 담보로 제공한 경우를 제외합니다.)
              </li>
              <li>
                2. 제3자가 권한 없이 이용자의 접근매체를 이용하여 전자금융거래를
                할 수 있음을 알았거나 쉽게 알 수 있었음에도 불구하고 이용자가
                자신의 접근매체를 누설 또는 노출하거나 방치한 경우
              </li>
              <li>
                3. 회사가 접근매체를 통하여 이용자의 신원, 권한 및 거래지시의
                내용 등을 확인하는 것 외에 보안강화를 위하여 전자금융거래 시
                사전에 요구하는 추가적인 보안조치를 이용자가 정당한 사유 없이
                거부하여 사고가 발생한 경우
              </li>
              <li>
                4. 이용자가 제3호에 따른 추가적인 보안조치에 사용되는 매체 수단
                또는 정보에 대하여 다음 각 목의 어느 하나에 해당하는 행위를 하여
                사고가 발생한 경우
                <ul>
                  <li>가. 누설, 노출 또는 방치한 행위</li>
                  <li>
                    나. 제3자에게 대여하거나 그 사용을 위임한 행위 또는 양도나
                    담보의 목적으로 제공한 행위
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            ⑥ 서비스 이용 중 등록한 송금정보 오류로 인하여 발생되는 손실에
            관해서는 회사는 책임을 지지 않습니다.
          </li>
        </ol>

        <p className="sub-text">제14조 (환급)</p>
        <ol className="depth01">
          <li>
            ① 이용자의 귀책사유 없이 이용자가 회사에 본 서비스를 신청하여
            지정계좌에 입금한 날로부터 15일 이내에 송금처리가 완료되지 않은
            경우에는 회사에 환급을 신청할 수 있습니다.
          </li>
          <li>
            ② 회사는 이용자로부터 제1항의 환급신청을 받은 경우 특별한 사정이
            있는 경우를 제외하고 당초 이용자가 지정계좌에 입금한 금액 및 제13조
            제1항의 손해배상 해당금액 등을 이용자에게 지급하여야 합니다.
          </li>
        </ol>

        <p className="sub-text">제15조 (분쟁처리절차)</p>
        <ol className="depth01">
          <li>
            ① 회사는 ‘소액해외송금업무와 관련하여 이용자가 제기하는 정당한
            의견이나 불만을 반영하고 이용자가 소액해외송금업무와 관련하여 입은
            손해를 배상하기 위한 절차’(이하 ‘분쟁처리절차’)에 관한 사항을
            마련하여야 합니다.
          </li>
          <li>
            ② 회사는 분쟁사항에 대한 접수방법(분쟁처리책임자와 담당자 지정내역
            및 그 연락처를 포함합니다), 분쟁처리절차(처리기한, 이용자통보방식
            등을 포함합니다) 등을 이용자에게 제공하여야 합니다.
          </li>
          <li>
            ③ 이용자는 소액해외송금거래의 처리에 관하여 이의가 있을 때에는
            회사의 분쟁처리책임자 및 담당자 등에게 그 해결을 요구할 수 있으며,
            회사는 이를 조사하여 제2항의 처리기한 이내에 처리결과를 이용자에게
            통보하여야 합니다.
          </li>
          <li>
            ④ 회사는 분쟁처리책임자와 담당자 지정내역 및 그 연락처 등을 핀크 앱,
            회사 홈페이지 등에 게시하고 이를 최신내용으로 관리하여야 합니다.
          </li>
        </ol>

        <p className="sub-text">제16조 (거래기록의 보존)</p>
        <p>
          회사는 외국환거래법령 등 관계법령에 따라 이용자와의 지급 및
          수령거래기록을 5년간 보관하여야 합니다.
        </p>

        <p className="sub-text">제17조 (거래내용 녹음)</p>
        <p>
          회사는 거래의 정확성을 기하기 위해 이용자와의 전화통화에 의한
          거래내용을 녹음할 수 있습니다. 다만, 녹음된 내용은 해당거래에 관한
          분쟁이 발생할 경우의 증거자료로만 사용할 수 있으며, 이 경우 이용자는
          회사에 녹음된 내용의 청취 및 제공을 요구할 수 있습니다
        </p>

        <p className="sub-text">제18조 (비밀보장의무)</p>
        <ol className="depth01">
          <li>
            ① 회사는 ‘이용자의 인적사항, 계좌정보, 회사와의 송금거래 내용 및
            실적에 관한 자료 등 소액해외송금업무 수행을 통하여 알게 된 일체의
            고객정보’(이하 ‘고객정보’라 합니다)에 대하여 관계법령에서 정하는
            경우를 제외하고 이용자의 동의 없이 제3자에게 제공하거나 업무 목적
            외에 누설하거나 이용하여서는 아니됩니다.
          </li>
          <li>
            ② 회사가 관리소홀 등 회사의 귀책사유로 제1항을 위반하거나 고객정보의
            도난 또는 유출이 발생한 경우 회사가 피해이용자에게 배상책임이
            있습니다. 다만, 회사가 고의 또는 과실이 없음을 증명한 경우에는 그
            책임을 면할 수 있습니다.
          </li>
        </ol>

        <p className="sub-text">제19조 (약관의 교부∙설명)</p>
        <ol className="depth01">
          <li>
            ① 회사는 이용자가 전자금융거래 서비스를 이용하기 전에 본 약관을
            게시하고, 이용자가 본 약관의 중요한 내용을 확인할 수 있도록 합니다.
            이용자의 요청이 있는 경우 전자문서의 전송(전자우편을 이용한 전송을
            포함합니다), 모사전송, 우편 또는 직접 교부의 방식으로 약관의 사본을
            이용자에게 교부합니다.
          </li>
          <li>
            ② 회사는 이용자가 약관의 내용에 대한 설명을 요청하는 경우 다음 각
            호의 어느 하나의 방법으로 이용자에게 약관의 중요내용을 설명합니다.
            <ol className="depth02">
              <li>1. 약관의 중요내용을 이용자에게 직접 설명</li>
              <li>
                2. 약관의 중요내용에 대한 설명을 전자적 장치를 통하여 이용자가
                알기 쉽게 표시하고 이용자로부터 해당 내용을 충분히 인지하였다는
                의사표시를 전자적 장치를 통하여 수령
              </li>
            </ol>
          </li>
        </ol>

        <p className="sub-text">제20조 (서비스의 이용시간)</p>
        <ol className="depth01">
          <li>
            ① 서비스의 이용은 회사의 업무상 또는 기술상의 특별한 지장이 없는 한
            연중무휴, 1일 24시간을 원칙으로 합니다. 다만 제2항의 경우에는
            서비스의 전부 또는 일부가 제한될 수 있습니다.
          </li>
          <li>
            ② 회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를
            제한하거나 중지할 수 있다는 내용 및 그 적용 일자를 홈페이지와 핀크
            앱에 미리 공지합니다. 다만, 회사 또는 핀크 서비스 운영자의 고의 및
            과실이 없는 장애, 시스템 다운 등 회사가 통제할 수 없는 사유로
            서비스가 중단되어 사전 공지가 불가능한 경우에는 그러하지 아니합니다.
            <ol className="depth02">
              <li>
                1. 서비스 또는 출금계좌가 자금세탁, 보이스 피싱 등 범죄 목적으로
                사용될 경우
              </li>
              <li>2. 고객이 국내 체류자격을 상실한 경우</li>
              <li>
                3. 외국환거래법, 외국환거래규정 등 관련 법규에 따라 해외송금
                이용이 제한된 경우
              </li>
              <li>
                4. 잔액부족, 지급정지 등의 사유로 사유로 사유로 출금계좌에서
                송금대금 및 송금수수료를 인출할 수 없는 경우
              </li>
              <li>
                5. 거래외국환은행지정 미지정, 송금한도 초과 , 송금정보 오류 ,
                지급증빙서류 미제출 등 송금신청에 따라 송금처리할 수 없는 사유가
                발생한 경우
              </li>
            </ol>
          </li>
        </ol>

        <p className="sub-text">제21조 (준용규정)</p>
        <p>
          이 약관에서 정하지 않은 사항에 대하여서는 외국환거래법규 등 관련법규,
          전자금융거래 기본약관, 회사의 서비스 약관에 따릅니다.
        </p>

        <p className="sub-text">제22조 (관할법원)</p>
        <p>
          이 거래와 관련한 분쟁이 발생할 경우 양 당사자의 합의에 의해 해결함을
          원칙으로 합니다. 다만 당사자 간에 합의할 수 없거나 합의가 이루어지지
          않아 이 거래와 관련하여 소송이 제기되는 경우 관할법원은 민사소송법에서
          정하는 바에 따르기로 합니다.
        </p>
      </div>
    </article>
  );
};

export default TermsSendPage;
