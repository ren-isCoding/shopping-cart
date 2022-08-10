import React from "react"
import styled from "styled-components"
import ItemFilter from "./ItemFilter"
import ResponsiveItemFilter from "./ResponsiveItemFilter"
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
}) {
  return (
    <MainContainer>
      <ItemFilter
        pcParts={pcParts}
        setSelectedFilter={setSelectedFilter}
        isResponsiveFilterActive={isResponsiveFilterActive}
        setIsResponsiveFilterActive={setIsResponsiveFilterActive}
      />
      <Items
        pcParts={pcParts}
        selectedFilter={selectedFilter}
        cart={cart}
        setCart={setCart}
        searchValues={searchValues}
      />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  @media (max-width: 1050px) {
    justify-content: center;
  }
`
