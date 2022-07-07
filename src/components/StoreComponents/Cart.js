import React from "react"
import styled from "styled-components"

export default function Cart({
  cart,
  setCart,
  isShoppingCartActive,
  setIsShoppingCartActive,
}) {
  const cartItems = cart.map((cartObj) => {
    const { id, name, price, img, quantity } = cartObj
    return (
      <div key={id}>
        {name} <img src={img} alt="" />
        {quantity}
      </div>
    )
  })

  function closeCart() {
    setIsShoppingCartActive(false)
  }

  return (
    <CartContainer
      opacity={isShoppingCartActive ? "1" : "0"}
      pointerEvents={isShoppingCartActive ? "all" : "none"}
    >
      <div className="overlay" onClick={(e) => closeCart()}></div>
      <div className="cart"></div>
    </CartContainer>
  )
}

const CartContainer = styled.div`
  position: fixed;
  display: flex;
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointerEvents};
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;

  .overlay {
    background: black;
    opacity: 0.8;
    flex-grow: 2;
  }

  .cart {
    flex-grow: 1;
    background: whitesmoke;
  }
`
