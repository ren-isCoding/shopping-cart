import React from "react"
import styled from "styled-components"
import ProductFilter from "./ProductFilter"
import Products from "./Products"

export default function Main() {
  return (
    <MainContainer>
      <ProductFilter />
      <Products />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
`
