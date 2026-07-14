"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [serverIp, setServerIp] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const changeQuantity = (id: number, quantity: number) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(newCart);
  };

  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>注文かご</h1>

      {cart.length === 0 ? (
        <>
          <p>注文かごは空です。</p>
          <button onClick={() => router.push("/menu")}>メニューに戻る</button>
        </>
      ) : (
        <>
          <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <h2>{item.name}</h2>
                <p>単価：¥{item.price}</p>

                <label>
                  個数：
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      changeQuantity(item.id, Number(e.target.value))
                    }
                    style={{ marginLeft: "8px", padding: "8px" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}個
                      </option>
                    ))}
                  </select>
                </label>

                <p>小計：¥{item.price * item.quantity}</p>

                <button onClick={() => removeItem(item.id)}>削除</button>
              </div>
            ))}
          </div>

          <hr style={{ margin: "32px 0" }} />

          <h2>合計金額：¥{totalPrice}</h2>

          <button onClick={() => router.push("/menu")}>メニューに戻る</button>

          <button
            onClick={() => router.push("/confirm")}
            style={{ marginLeft: "12px" }}
          >
            注文確認へ進む
          </button>
        </>
      )}
    </main>
  );
}