import React, { useContext } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"
import { NotificationContext } from "../NotificationComponents/NotificationProvider"

export default function Items({ pcParts, selectedFilter, cart, setCart, searchValues }) {
  function renderItem(item) {
    const { id, img, name, price } = item
    return (
      <div className="product-div" key={id}>
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
      return renderItem(item)
    })
  }
  //else render all store items
  else {
    const { cpu, gpu, mobo, ram } = pcParts

    const cpuItems = cpu.map((cpu) => {
      return renderItem(cpu)
    })
    const gpuItems = gpu.map((gpu) => {
      return renderItem(gpu)
    })
    const moboItems = mobo.map((mobo) => {
      return renderItem(mobo)
    })
    const ramItems = ram.map((ram) => {
      return renderItem(ram)
    })

    items = [...cpuItems, ...gpuItems, ...moboItems, ...ramItems]
  }

  function NoItemsFound() {
    return <h2 className="no-items-found">No Items Found.</h2>
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
  return <Container>{items.length ? items : NoItemsFound()}</Container>
}

const Container = styled.div`
  display: grid;
  height: 66rem;
  min-width: 81.5%;
  padding: 0 2rem;
  border-left: solid 0.1rem lightgray;
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
