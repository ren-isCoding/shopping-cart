import React from "react"
import styled from "styled-components"
import ItemFilter from "./ItemFilter"
import Items from "./Items"

export default function Main({ pcParts }) {
  return (
    <MainContainer>
      <ItemFilter />
      <Items pcParts={pcParts} />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
`
