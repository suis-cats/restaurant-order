import "./CheckOrder.css";

export default function CheckOrder() {
  const orders = [
    { quantity: 1, menu: "ハンバーグ" },
    { quantity: 2, menu: "パスタ" },
    { quantity: 1, menu: "ハンバーガー" },
    { quantity: 1, menu: "ほうれん草" },
    { quantity: 1, menu: "エビサラダ" },
    { quantity: 1, menu: "マヨネーズピザ" },
    { quantity: 2, menu: "ドリア" },
    { quantity: 2, menu: "かき氷" },
  ];

  return (
    <div className="check-order-page">
      <div className="order-card">
        <h1 className="order-title">注文内容</h1>

        <div className="order-info">
          <div className="info-row">
            <span className="info-label">卓番号</span>
            <span className="info-value">5</span>
          </div>

          <div className="info-row">
            <span className="info-label">人数</span>
            <span className="info-value">4</span>
          </div>
        </div>

        <table className="order-table">
          <thead>
            <tr>
              <th>個数</th>
              <th>メニュー</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.quantity}</td>
                <td>{order.menu}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div className="order-card">
        <h1 className="order-title">注文内容</h1>

        <div className="order-info">
          <div className="info-row">
            <span className="info-label">卓番号</span>
            <span className="info-value">5</span>
          </div>

          <div className="info-row">
            <span className="info-label">人数</span>
            <span className="info-value">4</span>
          </div>
        </div>

        <table className="order-table">
          <thead>
            <tr>
              <th>個数</th>
              <th>メニュー</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.quantity}</td>
                <td>{order.menu}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}