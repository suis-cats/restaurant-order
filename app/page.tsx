"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [people, setPeople] = useState(1);
  const router = useRouter();

  const startOrder = () => {
    localStorage.setItem("people", String(people));
    router.push("/menu");
  };

  return (

    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#f7f3ea",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          padding: "40px",
          borderRadius: "24px",
          backgroundColor: "white",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
          レストラン注文
        </h1>

        <p style={{ color: "#666", marginBottom: "32px" }}>
          人数を選択して注文を始めてください
        </p>

        <label
          style={{
            display: "block",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          人数
        </label>

        <select
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "22px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            marginBottom: "32px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num}名
            </option>
          ))}
        </select>

        <button
          onClick={startOrder}
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "bold",
            borderRadius: "16px",
            border: "none",
            backgroundColor: "#d35400",
            color: "white",
            cursor: "pointer",
          }}
        >
          注文を始める
        </button>
      </div>
    </main>
  );
}