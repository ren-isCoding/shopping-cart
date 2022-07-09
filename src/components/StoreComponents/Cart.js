import React from "react"
import styled from "styled-components"
import EmptyCart from "./EmptyCart"

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
      opacity={isShoppingCartActive ? ".8" : "0"}
      pointerEvents={isShoppingCartActive ? "all" : "none"}
      translate={isShoppingCartActive ? 0 : "100%"}
    >
      <div className="overlay" onClick={(e) => closeCart()}></div>
      <div className="cart">
        {cartItems.length ? (
          cartItems
        ) : (
          <EmptyCart setIsShoppingCartActive={setIsShoppingCartActive} />
        )}
      </div>
    </CartContainer>
  )
}

const CartContainer = styled.div`
  position: fixed;
  display: flex;
  pointer-events: ${(props) => props.pointerEvents};
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  justify-content: flex-end;

  .overlay {
    opacity: ${(props) => props.opacity};
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    transition: 700ms;
  }

  .cart {
    transition: 500ms;
    transform: translateX(${(props) => props.translate}) !important;
    background: whitesmoke;
    opacity: 1;
    width: 30%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
