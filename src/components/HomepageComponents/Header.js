import React from "react"
import styled from "styled-components"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function Header({ setIsShoppingCartActive }) {
  function openShoppingCart() {
    setIsShoppingCartActive(true)
  }
  return (
    <HeaderContainer>
      <h3>FAKE COMPONENTS</h3>
      <div className="header-div">
        <div className="container" onClick={(e) => openShoppingCart()}>
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
  align-items: flex-start;
  gap: 15rem;
  width: 80rem;
  max-height: 10rem;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  h3 {
    letter-spacing: 0.7rem;
    font-weight: lighter;
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
    color: whitesmoke;
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
