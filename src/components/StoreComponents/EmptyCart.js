import React from "react"
import styled from "styled-components"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function EmptyCart({ setIsShoppingCartActive }) {
  function closeCart() {
    setIsShoppingCartActive(false)
  }

  return (
    <Container>
      <p>
        Your Shopping Cart <br /> is empty.
      </p>
      <ShoppingCartSVG size={240} color="#DADADE" />
      <button onClick={(e) => closeCart()}>BROWSE PRODUCTS</button>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  color: #231f20;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  justify-self: center;
  align-self: center;

  button {
    padding: 3rem 4rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    transform: scaleY(0.8);
    border: solid 0.1rem gray;
    background: none;
    z-index: 1;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);

    &::before {
      content: "";
      background-color: #231f20;
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: -100%;
      left: 0;
      z-index: -1;
      transition: all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
    &:hover {
      color: whitesmoke;
    }
    &:hover::before {
      bottom: 0;
    }
  }
`
