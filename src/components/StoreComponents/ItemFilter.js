import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { NotificationContext } from "../NotificationComponents/NotificationProvider"
import { v4 } from "uuid"
import ResponsiveItemFilter from "./ResponsiveItemFilter"

export default function ItemFilter({
  pcParts,
  setSelectedFilter,
  isResponsiveFilterActive,
  setIsResponsiveFilterActive,
}) {
  const { cpu, gpu, mobo, ram } = pcParts
  const [selectedItemsText, setSelectedItemsText] = useState("All Products")
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050)

  function updateMedia() {
    setDesktop(window.innerWidth > 1050)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  const dispatchNotification = useContext(NotificationContext)
  function createNotification(message) {
    dispatchNotification({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        color: "black",
        message,
      },
    })
  }

  function closeFilterMenu() {
    if (isResponsiveFilterActive) {
      setIsResponsiveFilterActive(false)
    }
  }

  function filterItems(itemCategory) {
    closeFilterMenu()
    if (selectedItemsText === itemCategory) return
    setSelectedItemsText(itemCategory)
    createNotification(`Filtered for ${itemCategory}`)
    if (itemCategory === "All Products") setSelectedFilter(pcParts)
    if (itemCategory === "Processors") setSelectedFilter(cpu)
    if (itemCategory === "Video Cards") setSelectedFilter(gpu)
    if (itemCategory === "Motherboards") setSelectedFilter(mobo)
    if (itemCategory === "RAM") setSelectedFilter(ram)
  }

  function DesktopItemFilter() {
    return (
      <DesktopContainer>
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
      </DesktopContainer>
    )
  }

  return isDesktop ? (
    <DesktopItemFilter />
  ) : (
    <ResponsiveItemFilter
      isResponsiveFilterActive={isResponsiveFilterActive}
      filterItems={filterItems}
      closeFilterMenu={closeFilterMenu}
      selectedItemsText={selectedItemsText}
    />
  )
}

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`
