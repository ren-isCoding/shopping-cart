import React from "react"
import styled from "styled-components"

export default function Header() {
  return (
    <HeaderContainer>
      <h2>FAKE COMPONENTS</h2>
      <div>
        <span>Search</span>
        <span>Cart</span>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  color: whitesmoke;
  display: flex;
  gap: 30rem;

  div {
    display: flex;
    gap: 5rem;
  }
`
