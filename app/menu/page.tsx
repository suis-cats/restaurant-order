"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  { id: 1, name: "カレーライス", price: 800 },
  { id: 2, name: "オムライス", price: 900 },
  { id: 3, name: "ハンバーグ", price: 1000 },
  { id: 4, name: "コーヒー", price: 400 },
  { id: 5, name: "紅茶", price: 400 },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function MenuPage() {
  const router = useRouter();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [cart, setCart] = useState<CartItem[]>([]);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (item: { id: number; name: string; price: number }) => {
    const quantity = quantities[item.id] || 1;
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const newCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      saveCart(newCart);
    } else {
      saveCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>メニュー一覧</h1>

      <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <h2>{item.name}</h2>
            <p>¥{item.price}</p>

            <select
              value={quantities[item.id] || 1}
              onChange={(e) =>
                setQuantities({
                  ...quantities,
                  [item.id]: Number(e.target.value),
                })
              }
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}個
                </option>
              ))}
            </select>

            <button
              onClick={() => addToCart(item)}
              style={{ marginLeft: "12px" }}
            >
              注文かごに入れる
            </button>
          </div>
        ))}
      </div>

      <hr style={{ margin: "32px 0" }} />

      <h2>注文かご</h2>

      {cart.length === 0 ? (
        <p>まだ商品が入っていません。</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              {item.name} × {item.quantity}個：¥
              {item.price * item.quantity}
            </div>
          ))}

          <h3>合計：¥{totalPrice}</h3>

          <button
            onClick={() => router.push("/confirm")}
            style={{
              marginTop: "20px",
              padding: "14px 28px",
              fontSize: "18px",
              backgroundColor: "#d35400",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            注文確認へ進む
          </button>
        </>
      )}
    </main>
  );
}