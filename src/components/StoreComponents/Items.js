import React from "react"
import styled from "styled-components"
import ShoppingCartSVG from "../../assets/svg/ShoppingCart"

export default function Items({ pcParts, selectedItems }) {
  if (selectedItems.length) {
    const filteredItems = selectedItems.map((item) => {
      return (
        <div className="product-div" key={item.id}>
          <img src={item.img} />
          <button className="add-to-cart-btn">
            +
            <ShoppingCartSVG />
          </button>
          <h4>{item.name}</h4>
          <span>{item.price}</span>
        </div>
      )
    })

    return <Container>{filteredItems}</Container>
  } else {
    const { cpu, gpu, mobo, ram } = pcParts

    const cpuItems = cpu.map((cpuObj) => {
      return (
        <div className="product-div" key={cpuObj.id}>
          <img src={cpuObj.img} />
          <button className="add-to-cart-btn">
            +
            <ShoppingCartSVG />
          </button>
          <h4>{cpuObj.name}</h4>
          <span>{cpuObj.price}</span>
        </div>
      )
    })

    const gpuItems = gpu.map((gpuObj) => {
      return (
        <div className="product-div" key={gpuObj.id}>
          <img src={gpuObj.img} />
          <button className="add-to-cart-btn">
            +
            <ShoppingCartSVG />
          </button>
          <h4>{gpuObj.name}</h4>
          <span>{gpuObj.price}</span>
        </div>
      )
    })

    const moboItems = mobo.map((moboObj) => {
      return (
        <div className="product-div" key={moboObj.id}>
          <img src={moboObj.img} />
          <button className="add-to-cart-btn">
            +
            <ShoppingCartSVG />
          </button>
          <h4>{moboObj.name}</h4>
          <span>{moboObj.price}</span>
        </div>
      )
    })

    const ramItems = ram.map((ramObj) => {
      return (
        <div className="product-div" key={ramObj.id}>
          <img src={ramObj.img} />
          <button className="add-to-cart-btn">
            +
            <ShoppingCartSVG />
          </button>
          <h4>{ramObj.name}</h4>
          <span>{ramObj.price}</span>
        </div>
      )
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

    img {
      background: #e8e8e8;
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-bottom: 1rem;
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
      transform: scale(1.07);
    }
    h4 {
      transform: translate(0, 1rem);
    }
    span {
      transform: translate(0, 1rem);
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
