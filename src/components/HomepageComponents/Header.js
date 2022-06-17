import React from "react"
import styled from "styled-components"
import SearchSVG from "../../assets/svg/Search"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function Header() {
  return (
    <HeaderContainer>
      <h3>FAKE COMPONENTS</h3>
      <div className="header-div">
        <div className="container">
          <SearchSVG />
          <span>Search</span>
        </div>
        <div className="container">
          <ShoppingCartSVG />
          <span>Shopping Cart</span>
        </div>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80rem;
  max-height: 10rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }

  h3 {
    letter-spacing: 0.7rem;
  }

  .header-div {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
  }

  .container {
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    pointer-events: none;
  }
  svg {
    pointer-events: all;
    cursor: pointer;
  }
  svg + span {
    position: relative;
    font-size: 1.8rem;
    left: -1rem;
    opacity: 0;
    transition: 150ms;
    white-space: nowrap;
  }

  svg:hover + span {
    left: 0;
    opacity: 1;
  }
`
