import styles from "./PayPay.module.css";

export default function PayPay() {
  const items = [
    { name: "ハンバーグ定食", price: 980 },
    { name: "ドリンクバー", price: 280 },
    { name: "チーズトッピング", price: 150 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = Math.floor(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <main className={styles.page}>
      <div className={styles.phone}>
        <div className={styles.header}>
          <div className={styles.logo}>PayPay</div>
          <div className={styles.badge}>店内支払い</div>
        </div>

        <section className={styles.restaurantCard}>
          <p className={styles.label}>レストラン</p>
          <h1 className={styles.restaurantName}>Yura Dining</h1>

          <div className={styles.tableBox}>
            <span className={styles.tableLabel}>席番号</span>
            <span className={styles.tableNumber}>12</span>
          </div>
        </section>

        <section className={styles.orderCard}>
          <div className={styles.orderHeader}>
            <h2 className={styles.sectionTitle}>注文内容</h2>
            <span className={styles.orderStatus}>確認済み</span>
          </div>

          <div className={styles.itemList}>
            {items.map((item) => (
              <div key={item.name} className={styles.itemRow}>
                <span>{item.name}</span>
                <span>¥{item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.itemRow}>
            <span>小計</span>
            <span>¥{subtotal.toLocaleString()}</span>
          </div>

          <div className={styles.itemRow}>
            <span>消費税</span>
            <span>¥{tax.toLocaleString()}</span>
          </div>

          <div className={styles.totalRow}>
            <span>お支払い金額</span>
            <strong>¥{total.toLocaleString()}</strong>
          </div>
        </section>

        <section className={styles.payCard}>
          <p className={styles.payText}>
            この席の注文をPayPayで支払います
          </p>

          <button className={styles.payButton}>
            PayPayで支払う
          </button>

          <button className={styles.subButton}>
            注文内容を確認する
          </button>
        </section>

        <p className={styles.note}>
          ※ これはモック画面です。実際の決済は行われません。
        </p>
      </div>
    </main>
  );
}