import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import Cart from "../CartComponents/Cart"

export default function Store({
  pcParts,
  selectedFilter,
  setSelectedFilter,
  cart,
  setCart,
  isShoppingCartActive,
  setIsShoppingCartActive,
  searchValues,
  setSearchValues,
}) {
  return (
    <StoreContainer>
      <Header
        cart={cart}
        setIsShoppingCartActive={setIsShoppingCartActive}
        setSearchValues={setSearchValues}
      />
      <Main
        pcParts={pcParts}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        cart={cart}
        setCart={setCart}
        searchValues={searchValues}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        isShoppingCartActive={isShoppingCartActive}
        setIsShoppingCartActive={setIsShoppingCartActive}
      />
    </StoreContainer>
  )
}

const StoreContainer = styled.div`
  color: #231f20;
  background: #f8f5f2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12rem;
  padding: 0 13rem;
  padding-top: 10rem;

  @media (max-width: 1200px) {
    padding: 10%;
  }
`
