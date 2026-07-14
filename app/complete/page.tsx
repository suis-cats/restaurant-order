"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CompletePage() {
  const router = useRouter();
    const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");
    if (saved) {
      setOrder(JSON.parse(saved));
    }
  }, []); 

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "70px" }}>🍽️</div>

        <h1
          style={{
            color: "#28a745",
            marginTop: "20px",
            fontSize: "36px",
          }}
        >
          ご注文ありがとうございました！
        </h1>
        {order && (
          <h2
          style={{
            marginTop: "20px",
            fontSize: "28px",
          }}
        >
          注文番号: {order.orderId}
        </h2>
        )}

        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
            lineHeight: "1.8",
          }}
        >
          ご注文を受け付けました。
          <br />
          お料理ができるまでしばらくお待ちください。
        </p>

        <button
          onClick={() => router.push("/")}
          style={{
            marginTop: "40px",
            padding: "16px 40px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#ff6b00",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          トップ画面へ戻る
        </button>
      </div>
    </main>
  );
}