import React from "react"
import styled from "styled-components"

export default function Items({ pcParts }) {
  const { cpu, gpu, mobo } = pcParts
  const cpuItems = cpu.map((cpuObj) => {
    return (
      <div className="product-div" key={cpuObj.id}>
        <img src={cpuObj.img} />
        <h3>{cpuObj.name}</h3>
        <span>{cpuObj.price}</span>
      </div>
    )
  })

  const gpuItems = gpu.map((gpuObj) => {
    return (
      <div className="product-div" key={gpuObj.id}>
        <img src={gpuObj.img} />
        <h3>{gpuObj.name}</h3>
        <span>{gpuObj.price}</span>
      </div>
    )
  })

  const moboItems = mobo.map((moboObj) => {
    return (
      <div className="product-div" key={moboObj.id}>
        <img src={moboObj.img} />
        <h3>{moboObj.name}</h3>
        <span>{moboObj.price}</span>
      </div>
    )
  })

  const allItems = [...cpuItems, ...gpuItems, ...moboItems]

  return <Container>{allItems}</Container>
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  place-self: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .product-div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      background: #e8e8e8;
      width: 40rem;
      height: 30rem;
      object-fit: contain;
      margin-bottom: 1rem;
    }

    h3 {
      font-weight: 600;
    }
  }
`
