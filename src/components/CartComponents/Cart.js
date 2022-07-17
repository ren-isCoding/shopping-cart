import React from "react"
import styled from "styled-components"
import EmptyCart from "./EmptyCart"

export default function Cart({
  cart,
  setCart,
  isShoppingCartActive,
  setIsShoppingCartActive,
}) {
  function closeCart() {
    setIsShoppingCartActive(false)
  }

  function updateItemQuantity(id, operation) {
    let newCart = cart
    newCart.map((item) => {
      if (item.id === id) {
        if (operation === "increment") {
          item.quantity++
        } else item.quantity--
      }
    })

    newCart = newCart.filter((item) => {
      return item.quantity != 0
    })

    setCart([...newCart])
  }

  function deleteItem(id) {
    const newCart = cart.filter((item) => {
      return item.id != id
    })

    setCart([...newCart])
  }

  const cartItems = cart.map((item) => {
    const { id, name, price, img, quantity } = item
    const truePrice = (price * quantity).toFixed(2)
    return (
      <div className="cart-item" key={id}>
        <img src={img} />
        <div className="desc">
          <span className="name">{name}</span>
          <div className="quantity-div">
            <button
              className="decrement"
              onClick={(e) => updateItemQuantity(id, "decrement")}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="increment"
              onClick={(e) => updateItemQuantity(id, "increment")}
            >
              +
            </button>
          </div>
          <button className="delete-btn" onClick={(e) => deleteItem(id)}>
            DELETE
          </button>
          <span className="price">{truePrice} €</span>
        </div>
      </div>
    )
  })

  const totalPrice = cart
    .reduce((accumulator, item) => {
      const total = accumulator + item.price * item.quantity
      return total
    }, 0)
    .toFixed(2)

  const Footer = () => {
    return (
      <div className="footer">
        <button className="checkout-btn">
          CHECK OUT <span className="checkout-arrow">▶</span>
        </button>
        <span className="total-price">Total: {totalPrice} €</span>
      </div>
    )
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
        {cartItems.length ? <Footer /> : null}
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
    position: relative;
    width: 100%;
    display: flex;
    gap: 2rem;
    border-top: solid 0.1rem lightgray;
    border-bottom: solid 0.1rem lightgray;
    padding: 0.7rem 0;
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
    padding: 1rem;
    width: 100%;
    height: 100%;
    gap: 1rem;
  }

  .name {
    font-size: 1.8rem;
  }

  .delete-btn {
    position: absolute;
    bottom: 2rem;
    font-size: 1.5rem;
    padding: 0.3rem 1rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    transform: scaleY(0.9);
  }

  .price {
    position: absolute;
    bottom: 2rem;
    right: 0;
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

  .footer {
    bottom: 0rem;
    left: 0;
    right: 0;
    width: 100%;
    background: #231f20;
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .checkout-btn {
    background: none;
    font-weight: 600;
    transform: scaleY(0.9);
    transition: all 0.15s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: -10%;
      left: -8%;
      width: 0;
      height: 120%;
      z-index: -1;
      background: #e9e9ed;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      color: #231f20;
      &::before {
        width: 115%;
      }
    }
  }

  .checkout-arrow {
    font-size: 2rem;
    color: #231f20;
  }
`
