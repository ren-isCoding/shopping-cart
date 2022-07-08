import React from "react"
import styled from "styled-components"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function Items({ pcParts, selectedItems, cart, setCart }) {
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
        <span>{price}</span>
      </div>
    )
  }

  function addToCart(newItem) {
    if (cart.some((item) => item.id === newItem.id)) {
      let newCart = cart
      let selectedIndex = newCart.findIndex((obj) => obj.id === newItem.id)

      if (selectedIndex >= 0) {
        newCart[selectedIndex].quantity = (newCart[selectedIndex].quantity | 0) + 1
      }
      setCart([...newCart])
    } else {
      newItem.quantity = 1
      setCart((prevState) => [...prevState, newItem])
    }
  }

  if (selectedItems.length) {
    const filteredItems = selectedItems.map((itemObj) => {
      return renderItem(itemObj)
    })

    return <Container>{filteredItems}</Container>
  } else {
    const { cpu, gpu, mobo, ram } = pcParts

    const cpuItems = cpu.map((cpuObj) => {
      return renderItem(cpuObj)
    })
    const gpuItems = gpu.map((gpuObj) => {
      return renderItem(gpuObj)
    })
    const moboItems = mobo.map((moboObj) => {
      return renderItem(moboObj)
    })
    const ramItems = ram.map((ramObj) => {
      return renderItem(ramObj)
    })

    const allItems = [...cpuItems, ...gpuItems, ...moboItems, ...ramItems]

    return <Container>{allItems}</Container>
  }
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  place-self: center;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1660px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1370px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 4rem 3rem;

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
    right: 0;
    display: flex;
    font-size: 3rem;
    align-items: center;
    background: #3cb371;
    padding: 0 1rem;
    border-radius: 16px;
    color: white;
    transition: 150ms ease-in-out;
  }

  .add-to-cart-btn:hover {
    background: #3cc77a;
  }
`
