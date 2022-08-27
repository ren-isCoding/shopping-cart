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
  setSelectedItem,
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
    setSelectedItem(null)
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
          <li onClick={(e) => filterItems("All Products")}>
            <span>All Products</span>
          </li>
          <li onClick={(e) => filterItems("Processors")}>
            <span>Processors</span>
          </li>
          <li onClick={(e) => filterItems("Video Cards")}>
            <span>Video Cards</span>
          </li>
          <li onClick={(e) => filterItems("Motherboards")}>
            <span>Motherboards</span>
          </li>
          <li onClick={(e) => filterItems("RAM")}>
            <span>RAM</span>
          </li>
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
  border-right: solid 0.1rem lightgray;
  padding-right: 10rem;
  height: 95%;
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
    display: flex;
    flex-direction: column;
    font-weight: 600;
    list-style: none;
  }

  li span {
    display: inline-block;
    position: relative;
    cursor: pointer;
    z-index: 1;
    margin-bottom: 1rem;
  }

  li span::after {
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
  li span:hover::after {
    transform: scaleX(1);
  }
`
