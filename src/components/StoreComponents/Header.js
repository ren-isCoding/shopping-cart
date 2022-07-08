import React from "react"
import styled from "styled-components"
import SearchSVG from "../../assets/svg/Search"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function Header({ cart, setIsShoppingCartActive }) {
  function openShoppingCart() {
    setIsShoppingCartActive(true)
  }

  const itemsInCart = cart
    .map((itemObj) => {
      return itemObj.quantity
    })
    .reduce((a, b) => a + b, 0)

  return (
    <HeaderContainer>
      <h3>
        <a href="/"> FAKE COMPONENTS</a>
      </h3>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <SearchSVG />
        </div>
      </div>
      <div className="container" onClick={(e) => openShoppingCart()}>
        <ShoppingCartSVG />
        <p>({itemsInCart})</p>
        <span>Shopping Cart</span>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
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

  .search-bar {
    display: flex;
    gap: 0.7rem;
    background: black;
    color: whitesmoke;
    border-radius: 5px;
    padding-right: 1rem;
    input {
      color: black;
      border: 0.1rem solid black;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding-left: 1rem;
    }
    .search-icon {
      display: flex;
      transform: scale(0.8);
      cursor: pointer;
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
