import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "/src/redux1/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "/src/redux1/slice/cartSlice";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.cartItems) || [];

  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 0),
    0,
  );

  if (!cartItems || cartItems.length === 0) {
    return (
      <div
        style={{ padding: "50px", textAlign: "center", fontFamily: "Arial" }}
      >
        <h2>Aapka Cart Khaali Hai 🛒</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial",
      }}
    >
      <h2>Shopping Cart ({totalItems} Items)</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={{ flex: 2, minWidth: "300px" }}>
          {cartItems.map((item) => {
            if (!item) return null;
            return (
              <div
                key={`cart-item-${item.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "15px 0",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "cover",
                    marginRight: "20px",
                    borderRadius: "4px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 5px 0" }}>{item.title}</h4>
                  <p style={{ margin: 0, color: "#555" }}>
                    Price: ${item.price}
                  </p>
                  <p style={{ margin: "5px 0 0 0", fontWeight: "bold" }}>
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginRight: "20px",
                  }}
                >
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    style={{
                      padding: "5px 12px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      border: "1px solid #ccc",
                      background: "#fff",
                    }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      fontWeight: "bold",
                      minWidth: "20px",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    style={{
                      padding: "5px 12px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      border: "1px solid #ccc",
                      background: "#fff",
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "250px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            height: "fit-content",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3
            style={{
              borderBottom: "2px solid #000",
              paddingBottom: "10px",
              margin: "0 0 15px 0",
            }}
          >
            Order Summary
          </h3>

          <div
            style={{
              display: "flex",
              justifycontent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Total Items:</span>
            <strong>{totalItems}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "18px",
              borderTop: "1px dashed #ccc",
              paddingTop: "15px",
              marginTop: "15px",
            }}
          >
            <span>Total Price:</span>
            <strong style={{ color: "#000", fontSize: "20px" }}>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <button
            style={{
              width: "100%",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "12px",
              marginTop: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
