import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"

export default function Store({ pcParts, setPcParts, selectedItems, setSelectedItems }) {
  return (
    <StoreContainer>
      <Header />
      <Main
        pcParts={pcParts}
        setPcParts={setPcParts}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </StoreContainer>
  )
}

const StoreContainer = styled.div`
  color: #231f20;
  background: #f8f5f2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12rem;
  padding-top: 10rem;
  padding-left: 7rem;

  @media (max-width: 800px) {
    padding: 10%;
  }
`
