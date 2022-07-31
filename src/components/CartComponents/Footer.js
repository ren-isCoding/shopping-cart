import React from "react"

export default function Footer({ setIsVideoActive, totalPrice }) {
  function showVideo() {
    setIsVideoActive(true)
  }

  return (
    <div className="footer">
      <button className="checkout-btn" onClick={(e) => showVideo()}>
        CHECK OUT <span className="checkout-arrow">▶▶</span>
      </button>
      <span className="total-price">Total: {totalPrice} €</span>
    </div>
  )
}
