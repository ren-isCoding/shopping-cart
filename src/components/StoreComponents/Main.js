import React from "react"
import styled from "styled-components"
import ItemFilter from "./ItemFilter"
import Items from "./Items"

export default function Main({
  pcParts,
  selectedItems,
  setSelectedItems,
  cart,
  setCart,
}) {
  return (
    <MainContainer>
      <ItemFilter
        pcParts={pcParts}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <Items
        pcParts={pcParts}
        selectedItems={selectedItems}
        cart={cart}
        setCart={setCart}
      />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
`
