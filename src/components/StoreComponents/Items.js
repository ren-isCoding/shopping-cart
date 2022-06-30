import React from "react"
import styled from "styled-components"

export default function Items({ pcParts, selectedItems }) {
  if (selectedItems.length) {
    const filteredItems = selectedItems.map((item) => {
      return (
        <div className="product-div" key={item.id}>
          <img src={item.img} />
          <h3>{item.name}</h3>
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
          <h4>{cpuObj.name}</h4>
          <span>{cpuObj.price}</span>
        </div>
      )
    })

    const gpuItems = gpu.map((gpuObj) => {
      return (
        <div className="product-div" key={gpuObj.id}>
          <img src={gpuObj.img} />
          <h4>{gpuObj.name}</h4>
          <span>{gpuObj.price}</span>
        </div>
      )
    })

    const moboItems = mobo.map((moboObj) => {
      return (
        <div className="product-div" key={moboObj.id}>
          <img src={moboObj.img} />
          <h4>{moboObj.name}</h4>
          <span>{moboObj.price}</span>
        </div>
      )
    })

    const ramItems = ram.map((ramObj) => {
      return (
        <div className="product-div" key={ramObj.id}>
          <img src={ramObj.img} />
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
  }
`
