import React, { useState } from "react"
import styled from "styled-components"

export default function ResponsiveItemFilter({
  pcParts,
  setSelectedFilter,
  isResponsiveFilterActive,
  setIsResponsiveFilterActive,
}) {
  const { cpu, gpu, mobo, ram } = pcParts
  const [selectedItemsText, setSelectedItemsText] = useState("All Products")

  function closeFilterMenu() {
    setIsResponsiveFilterActive(false)
  }

  const selectAllProducts = () => {
    setSelectedFilter([])
    setSelectedItemsText("All Products")
    closeFilterMenu()
  }
  const selectCpuItems = () => {
    setSelectedFilter(cpu)
    setSelectedItemsText("Processors")
    closeFilterMenu()
  }
  const selectGpuItems = () => {
    setSelectedFilter(gpu)
    setSelectedItemsText("Video Cards")
    closeFilterMenu()
  }
  const selectMoboItems = () => {
    setSelectedFilter(mobo)
    setSelectedItemsText("Motherboards")
    closeFilterMenu()
  }
  const selectRamItems = () => {
    setSelectedFilter(ram)
    setSelectedItemsText("RAM")
    closeFilterMenu()
  }

  return (
    <Container
      opacity={isResponsiveFilterActive ? ".8" : "0"}
      pointerEvents={isResponsiveFilterActive ? "all" : "none"}
      translate={isResponsiveFilterActive ? 0 : "-100%"}
    >
      <div className="overlay" onClick={(e) => closeFilterMenu()}></div>
      <div className="filter">
        <button onClick={(e) => closeFilterMenu()}>Exit</button>
        <div className="section-title">
          <span>Store/</span>
          <h2>{selectedItemsText}</h2>
        </div>
        <ul>
          <li onClick={(e) => selectAllProducts()}>All Products</li>
          <li onClick={(e) => selectCpuItems()}>Processors</li>
          <li onClick={(e) => selectGpuItems()}>Video Cards</li>
          <li onClick={(e) => selectMoboItems()}>Motherboards</li>
          <li onClick={(e) => selectRamItems()}>RAM</li>
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: none;
  @media (max-width: 1050px) {
    display: flex;
  }
  position: fixed;
  pointer-events: ${(props) => props.pointerEvents};
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  justify-content: flex-start;

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
    z-index: 1;
    padding: 10% 15%;
    gap: 4rem;
    margin-right: 10rem;
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
`
