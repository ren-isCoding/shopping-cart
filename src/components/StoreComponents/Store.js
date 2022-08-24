import React, { useState } from "react"
import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import Cart from "../CartComponents/Cart"
import PcPartsList from "../../utils/PcPartsList"

export default function Store({
  cart,
  setCart,
  isShoppingCartActive,
  setIsShoppingCartActive,
}) {
  const [pcParts, setPcParts] = useState(PcPartsList)

  const [selectedItem, setSelectedItem] = useState(null)

  const [selectedFilter, setSelectedFilter] = useState([])

  const [searchValues, setSearchValues] = useState([])

  const [isResponsiveFilterActive, setIsResponsiveFilterActive] = useState(false)

  return (
    <StoreContainer>
      <Header
        cart={cart}
        setIsShoppingCartActive={setIsShoppingCartActive}
        setSearchValues={setSearchValues}
        setIsResponsiveFilterActive={setIsResponsiveFilterActive}
      />
      <Main
        pcParts={pcParts}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        cart={cart}
        setCart={setCart}
        searchValues={searchValues}
        isResponsiveFilterActive={isResponsiveFilterActive}
        setIsResponsiveFilterActive={setIsResponsiveFilterActive}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
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
  gap: 10rem;
  padding: 0 12rem;
  padding-top: 9rem;

  @media (max-width: 1200px) {
    padding: 8%;
  }
`
