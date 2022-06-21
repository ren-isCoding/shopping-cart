import React from "react"
import styled from "styled-components"

export default function Products({ pcParts }) {
  const { cpu } = pcParts
  const cpuProducts = cpu.map((cpuObj) => {
    return (
      <div className="product-div" key={cpuObj.id}>
        <img src={cpuObj.img} />
        <h3>{cpuObj.name}</h3>
        <span>{cpuObj.price}</span>
      </div>
    )
  })
  console.log(cpu)
  return <Container>{cpuProducts}</Container>
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
      object-fit: cover;
      margin-bottom: 1rem;
    }

    h3 {
      font-weight: 600;
    }
  }
`
