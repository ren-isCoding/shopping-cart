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
      <div className="cart-item" key={id}>
        <img src={img} />
        <div className="desc">
          <span className="name">{name}</span>
          <div className="quantity-div">
            <button className="decrement">-</button>
            <span className="quantity">{quantity}</span>
            <button className="increment">+</button>
          </div>
          <span className="price">{price}</span>
        </div>
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
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .cart-item {
    width: 100%;
    display: flex;
    gap: 2rem;
    border-top: solid 0.1rem lightgray;
    border-bottom: solid 0.1rem lightgray;
  }

  .cart-item img {
    width: 17rem;
    min-width: 17rem;
    height: 15rem;
    padding: 1rem;
    background: #e9e9ed;
    object-fit: contain;
  }

  .desc {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    justify-content: center;
  }

  .name {
    font-size: 1.8rem;
  }
  .price {
    align-self: flex-end;
    font-weight: 600;
    font-size: 1.6rem;
  }

  .quantity-div {
    width: min-content;
    display: flex;
    align-items: center;
    padding: 0;

    button {
      padding: 0rem 1.5rem;
      border: none;
      font-size: 3rem;
    }

    .quantity {
      width: 4.4rem;
      height: 4.3rem;
      border: solid 0.1rem #e9e9ed;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
