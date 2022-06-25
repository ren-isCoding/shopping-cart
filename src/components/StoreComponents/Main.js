import React from "react"
import styled from "styled-components"
import ItemFilter from "./ItemFilter"
import Items from "./Items"

export default function Main({ pcParts, selectedItems, setSelectedItems }) {
  return (
    <MainContainer>
      <ItemFilter
        pcParts={pcParts}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <Items pcParts={pcParts} selectedItems={selectedItems} />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
`
