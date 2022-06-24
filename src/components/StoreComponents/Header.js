import React from "react"
import styled from "styled-components"
import SearchSVG from "../../assets/svg/Search"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function Header() {
  return (
    <HeaderContainer>
      <h3>
        <a href="/"> FAKE COMPONENTS</a>
      </h3>
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80rem;
  max-height: 10rem;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  h3 {
    letter-spacing: 0.7rem;
    font-weight: lighter;
    a {
      color: inherit;
    }
  }

  .header-div {
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: 800px) {
      gap: 4rem;
    }
  }

  .container {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    padding-top: 0rem;
    cursor: pointer;

    @media (max-width: 800px) {
      padding: 0;
    }
  }

  .container span {
    position: relative;
    font-size: 1.8rem;
    left: -1rem;
    opacity: 0;
    white-space: nowrap;
    transition: 150ms;

    @media (max-width: 800px) {
      opacity: 0.9;
      left: 0;
    }
  }

  .container:hover span {
    left: 0;
    opacity: 0.9;
  }
`
