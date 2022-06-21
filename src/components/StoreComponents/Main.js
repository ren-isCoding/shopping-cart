import React from "react"
import styled from "styled-components"
import ProductFilter from "./ProductFilter"
import Products from "./Products"

export default function Main({ pcParts }) {
  return (
    <MainContainer>
      <ProductFilter />
      <Products pcParts={pcParts} />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
`
