import React from "react"
import bg from "../../assets/img/bg.jpg"
import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import Cart from "../StoreComponents/Cart"

export default function Homepage({
  cart,
  setCart,
  isShoppingCartActive,
  setIsShoppingCartActive,
}) {
  return (
    <HomepageContainer>
      <Header
        cart={cart}
        setCart={setCart}
        isShoppingCartActive={isShoppingCartActive}
        setIsShoppingCartActive={setIsShoppingCartActive}
      />
      <Main />
      <Cart
        cart={cart}
        setCart={setCart}
        isShoppingCartActive={isShoppingCartActive}
        setIsShoppingCartActive={setIsShoppingCartActive}
      />
    </HomepageContainer>
  )
}

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  padding-top: 10rem;
  padding-left: 7rem;

  @media (max-width: 800px) {
    padding: 10%;
  }
`
