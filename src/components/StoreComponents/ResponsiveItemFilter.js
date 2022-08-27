import React from "react"
import styled from "styled-components"

export default function ResponsiveItemFilter({
  isResponsiveFilterActive,
  filterItems,
  closeFilterMenu,
  selectedItemsText,
}) {
  return (
    <Container
      opacity={isResponsiveFilterActive ? ".8" : "0"}
      pointerEvents={isResponsiveFilterActive ? "all" : "none"}
      translate={isResponsiveFilterActive ? 0 : "-100%"}
      onClick={(e) => closeFilterMenu()}
    >
      <div className="overlay" onClick={(e) => closeFilterMenu()}></div>
      <div className="filter">
        <button className="exit-btn" onClick={(e) => closeFilterMenu()}>
          Exit
        </button>
        <div className="section-title">
          <span>Store/</span>
          <h2>{selectedItemsText}</h2>
        </div>
        <ul>
          <li onClick={(e) => filterItems("All Products")}>All Products</li>
          <li onClick={(e) => filterItems("Processors")}>Processors</li>
          <li onClick={(e) => filterItems("Video Cards")}>Video Cards</li>
          <li onClick={(e) => filterItems("Motherboards")}>Motherboards</li>
          <li onClick={(e) => filterItems("RAM")}>RAM</li>
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: fixed;
  pointer-events: ${(props) => props.pointerEvents};
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  justify-content: flex-start;
  z-index: 1;

  .overlay {
    opacity: ${(props) => props.opacity};
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    transition: 700ms;
  }

  .filter {
    transition: 500ms;
    transform: translateX(${(props) => props.translate}) !important;
    display: flex;
    flex-direction: column;
    background: whitesmoke;
    padding: 10% 15%;
    gap: 4rem;
    margin-right: 10rem;
    z-index: 1;
    span {
      font-weight: 600;
    }

    .section-title {
      margin-bottom: 4rem;
    }
    h2 {
      white-space: nowrap;
      position: absolute;
    }

    ul {
      font-weight: 600;
      gap: 1rem;
      width: 15rem;
    }

    li {
      display: inline-block;
      position: relative;
      cursor: pointer;
      z-index: 2;
      margin-bottom: 1rem;
    }

    li::after {
      content: "";
      background: black;
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      bottom: 0.2rem;
      height: 0.2rem;
      transform: scaleX(0);
      transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
      transform-origin: 0 50%;
    }
    li:hover::after {
      transform: scaleX(1);
    }
  }

  .exit-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0 4rem;
    color: whitesmoke;
    background: #231f20;
    font-weight: 600;
    letter-spacing: 0.1rem;
    transition: 100ms;

    &:hover {
      color: lightgray;
    }
  }
`
