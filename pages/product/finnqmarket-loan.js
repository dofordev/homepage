import Layout from "../components/Layout";

export default function FinnqmarketLoan() {
  return (
    <Layout>
      <div>
        <div className="tab-wrap">
          <ul>
            <li class="is-active">
              <button type="button">대출비교</button>
            </li>
            <li>
              <button type="button">비상금대출</button>
            </li>
            <li>
              <button type="button">똑똑대출</button>
            </li>
            <li>
              <button type="button">생활비대출</button>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
