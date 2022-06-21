import React from "react"
import styled from "styled-components"

export default function ProductFilter() {
  return (
    <Container>
      <div>
        <span>Store/</span>
        <h2>All Products</h2>
      </div>
      <ul>
        <li>Processors</li>
        <li>Video Cards</li>
        <li>Motherboards</li>
        <li>RAM</li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-right: 20rem;
  span {
    font-weight: 600;
  }

  ul {
    list-style: none;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
