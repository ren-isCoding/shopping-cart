import React, { useState, useContext } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"
import { NotificationContext } from "../NotificationComponents/NotificationProvider"
import goBackSvg from "../../assets/svg/goBack"

export default function Items({
  pcParts,
  selectedFilter,
  cart,
  setCart,
  searchValues,
  selectedItem,
  setSelectedItem,
}) {
  const dispatchNotification = useContext(NotificationContext)
  function createNotification(item) {
    dispatchNotification({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        color: "green",
        message: `Added ${item.name} to cart.`,
      },
    })
  }

  function renderItems(item) {
    const { id, img, name, price } = item
    return (
      <div className="product-div" key={id} onClick={(e) => handleSelectItem(e, item)}>
        <div className="item-img">
          <img src={img} />
        </div>
        <button className="add-to-cart-btn" onClick={(e) => addToCart(item)}>
          +
          <ShoppingCartSVG />
        </button>
        <h4>{name}</h4>
        <span>{price} €</span>
      </div>
    )
  }

  function handleSelectItem(e, item) {
    if (e.target.type === "submit") return
    else setSelectedItem(item)
  }

  function addToCart(newItem) {
    if (cart.some((item) => item.id === newItem.id)) {
      let newCart = cart

      //check if the added item to cart already exists in cart and if so increment the quantity
      let selectedIndex = newCart.findIndex((oldItem) => oldItem.id === newItem.id)
      if (selectedIndex >= 0) {
        newCart[selectedIndex].quantity = (newCart[selectedIndex].quantity | 0) + 1
      }
      setCart([...newCart])
    } // else set the items quantity to 1
    else {
      newItem.quantity = 1
      setCart((prevState) => [...prevState, newItem])
    }

    createNotification(newItem)
  }

  let items
  //filter items based on selected item category if its selected
  if (selectedFilter.length) {
    items = selectedFilter.map((item) => {
      return renderItems(item)
    })
  }
  //else render all store items
  else {
    const { cpu, gpu, mobo, ram } = pcParts

    const cpuItems = cpu.map((cpu) => {
      return renderItems(cpu)
    })
    const gpuItems = gpu.map((gpu) => {
      return renderItems(gpu)
    })
    const moboItems = mobo.map((mobo) => {
      return renderItems(mobo)
    })
    const ramItems = ram.map((ram) => {
      return renderItems(ram)
    })

    items = [...cpuItems, ...gpuItems, ...moboItems, ...ramItems]
  }

  //filter items based on search bar input if it exists
  if (searchValues.length) {
    items = items.filter((item) => {
      //format item name into an array of characters
      const itemNameArr = item.props.children[2].props.children
        .toLowerCase()
        .replace(/\s/g, "")
        .split("")

      //check if itemNameArr includes all values inside searchValues with .every() method
      //if true return the item
      function includesMultipleCharacters(arr, values) {
        return values.every((value) => {
          return arr.includes(value)
        })
      }
      if (includesMultipleCharacters(itemNameArr, searchValues)) {
        return item
      }
    })
  }

  function NoItemsFound() {
    return <h2 className="no-items-found">No Items Found.</h2>
  }

  function goToStore() {
    setSelectedItem(null)
  }

  function ProductPage({ item }) {
    const { name, price, img } = item
    return (
      <ProductContainer>
        <div className="top">
          <button className="go-back-btn" onClick={(e) => goToStore()}>
            {goBackSvg}
          </button>
          <div className="top-left">
            <h2>{name}</h2>
            <span>Price: {price}€</span>
          </div>
          <button className="add-to-cart-btn" onClick={(e) => addToCart(item)}>
            +
            <ShoppingCartSVG />
          </button>
        </div>
        <img src={img} />
      </ProductContainer>
    )
  }

  return selectedItem ? (
    <ProductPage item={selectedItem} />
  ) : (
    <GridContainer>{items.length ? items : <NoItemsFound />}</GridContainer>
  )
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 3rem;
  align-items: center;
  @media (min-width: 1050px) {
    margin-right: 20rem;
  }
  .top {
    display: flex;
    gap: 5rem;
  }
  .go-back-btn {
    display: grid;
    place-items: center;
    height: 5rem;
    padding: 0 3rem;
    border-radius: 16px;
    font-size: 3rem;
    font-weight: bolder;
    font-family: "Times New Roman", Times, serif;
    background: #e9e9ed;
    transition: 100ms;
    &:hover {
      background: #d0d0d7;
    }
  }
  .add-to-cart-btn {
    height: 5rem;
    font-size: 3rem;
    background: #3cb371;
    padding: 0 2rem;
    border-radius: 16px;
    color: white;
    white-space: nowrap;
    transition: 100ms;

    &:hover {
      background: #3cc77a;
    }

    &:active {
      transform: scale(0.9);
      background: #3cb371;
    }
  }

  img {
    width: 80%;
    height: 55rem;
    object-fit: contain;
  }
`

const GridContainer = styled.div`
  display: grid;
  height: 66rem;
  min-width: 81.5%;
  padding: 0 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 3rem;
  @media (max-width: 1830px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    height: 73rem;
  }

  .product-div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    height: 30rem;
    cursor: pointer;

    .item-img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin-bottom: 1rem;
    }

    img {
      background: #e8e8e8;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 120ms ease-in;
    }

    h4 {
      font-weight: 600;
      white-space: nowrap;
      transition: 120ms ease-in;
    }

    span {
      transition: 120ms ease-in;
    }
  }

  .product-div:hover {
    img {
      transform: scale(1.05);
    }
    .add-to-cart-btn {
      opacity: 1;
    }
  }

  .add-to-cart-btn {
    opacity: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    font-size: 3rem;
    align-items: center;
    background: #3cb371;
    padding: 0 1rem;
    border-radius: 16px;
    color: white;
    transition: 100ms;

    &:hover {
      background: #3cc77a;
    }

    &:active {
      transform: scale(0.9);
      background: #3cb371;
    }
  }

  .no-items-found {
    position: absolute;
    justify-self: center;
    align-self: center;
  }
`
