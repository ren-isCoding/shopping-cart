import React, { useState, useContext } from "react"
import styled from "styled-components"
import { NotificationContext } from "../NotificationComponents/NotificationProvider"
import { v4 } from "uuid"

export default function ItemFilter({ pcParts, setSelectedFilter }) {
  const { cpu, gpu, mobo, ram } = pcParts
  const [selectedItemsText, setSelectedItemsText] = useState("All Products")

  const dispatchNotification = useContext(NotificationContext)
  function createNotification(message) {
    console.log(message)
    dispatchNotification({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        color: "neutral",
        message,
      },
    })
  }

  const selectAllProducts = () => {
    setSelectedFilter([])
    setSelectedItemsText("All Products")
    createNotification("Filtered for All Products")
  }
  const selectCpuItems = () => {
    setSelectedFilter(cpu)
    setSelectedItemsText("Processors")
    createNotification("Filtered for CPU Products")
  }
  const selectGpuItems = () => {
    setSelectedFilter(gpu)
    setSelectedItemsText("Video Cards")
    createNotification("Filtered for GPU Products")
  }
  const selectMoboItems = () => {
    setSelectedFilter(mobo)
    setSelectedItemsText("Motherboards")
    createNotification("Filtered for Motherboard Products")
  }
  const selectRamItems = () => {
    setSelectedFilter(ram)
    setSelectedItemsText("RAM")
    createNotification("Filtered for RAM Products")
  }

  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
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

  @media (max-width: 1050px) {
    display: none;
  }
`
