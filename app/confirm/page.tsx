"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function ConfirmPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    const now = new Date();

    const orderId = `ORDER-${now.getTime()}`;

    const orderdata = {
      orederId,
      items: cart,
      totalPrice,
      orderedAt: now.toISOString(),
      status: "received",
  };

  localStorage

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>注文内容の確認</h1>

      {cart.length === 0 ? (
        <>
          <p>注文かごが空です。</p>

          <button onClick={() => router.push("/menu")}>
            メニューへ戻る
          </button>
        </>
      ) : (
        <>
          <div style={{ marginTop: "30px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "15px",
                }}
              >
                <h3>{item.name}</h3>

                <p>単価：¥{item.price}</p>

                <p>数量：{item.quantity}個</p>

                <p>小計：¥{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <hr />

          <h2>合計金額：¥{totalPrice}</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <button
              onClick={() => router.push("/cart")}
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              戻る
            </button>

            <button
              onClick={handleOrder}
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "#ff6b00",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              注文を確定する
            </button>
          </div>
        </>
      )}
    </main>
  );
}