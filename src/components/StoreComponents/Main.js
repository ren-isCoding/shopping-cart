import React from "react"
import styled from "styled-components"
import ItemFilter from "./ItemFilter"
import Items from "./Items"

export default function Main({
  pcParts,
  selectedFilter,
  setSelectedFilter,
  cart,
  setCart,
  searchValues,
  isResponsiveFilterActive,
  setIsResponsiveFilterActive,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <MainContainer>
      <ItemFilter
        pcParts={pcParts}
        setSelectedFilter={setSelectedFilter}
        isResponsiveFilterActive={isResponsiveFilterActive}
        setIsResponsiveFilterActive={setIsResponsiveFilterActive}
        setSelectedItem={setSelectedItem}
      />
      <Items
        pcParts={pcParts}
        selectedFilter={selectedFilter}
        cart={cart}
        setCart={setCart}
        searchValues={searchValues}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 1050px) {
    justify-content: center;
  }
`
