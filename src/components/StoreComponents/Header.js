import React, { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import SearchSVG from "../../assets/svg/Search"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"
import FilterSVG from "../../assets/svg/Filter"

export default function Header({
  cart,
  setIsShoppingCartActive,
  setSearchValues,
  isResponsiveFilterActive,
  setIsResponsiveFilterActive,
}) {
  const navigate = useNavigate()
  const goToHomepage = useCallback(() => navigate("/", { replace: true }), [navigate])

  function openShoppingCart() {
    setIsShoppingCartActive(true)
  }

  function openFilterMenu() {
    setIsResponsiveFilterActive(true)
  }

  //format string to array of characters for easier item filtering
  function formatSearchValue(e) {
    let value = e.target.value
    value = value.replace(/\s/g, "").toLowerCase().split("")
    return value
  }

  //map through the items and sum the returned quantity with reduce method
  const itemsInCart = cart
    .map((item) => {
      return item.quantity
    })
    .reduce((a, b) => a + b, 0)

  return (
    <HeaderContainer>
      <h3 onClick={goToHomepage}>FAKE COMPONENTS</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValues(formatSearchValue(e))}
        />
        <div className="search-icon">
          <SearchSVG />
        </div>
      </div>
      <div className="flex-div">
        <div className="filter-btn btn" onClick={(e) => openFilterMenu()}>
          <FilterSVG />
          <span>Filter Items</span>
        </div>
        <div className="shopping-cart btn" onClick={(e) => openShoppingCart()}>
          <ShoppingCartSVG />
          <p>({itemsInCart})</p>
          <span>Shopping Cart</span>
        </div>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: flex-start;
  width: 100%;
  max-height: 10rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  h3 {
    letter-spacing: 0.7rem;
    font-weight: lighter;
    white-space: nowrap;
    cursor: pointer;
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

  .flex-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
  }

  .btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    padding-top: 0rem;
    cursor: pointer;

    @media (max-width: 1050px) {
      margin: 0;
    }
  }

  .btn span {
    position: relative;
    font-size: 1.8rem;
    left: -5%;
    opacity: 0;
    white-space: nowrap;
    transition: 150ms ease-in-out;
    @media (max-width: 1050px) {
      position: absolute;
      left: 80%;
    }
  }

  .btn:hover span {
    left: 0%;
    opacity: 0.9;
    @media (max-width: 1050px) {
      position: absolute;
      left: 90%;
    }
  }

  .filter-btn {
    display: none;
    @media (max-width: 1050px) {
      display: flex;
    }
  }
`
