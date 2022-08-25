import React from "react"
import bg from "../../assets/img/bg.jpg"
import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"

export default function Homepage({ setIsShoppingCartActive }) {
  return (
    <HomepageContainer>
      <Header setIsShoppingCartActive={setIsShoppingCartActive} />
      <Main />
    </HomepageContainer>
  )
}

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  padding-top: 10rem;
  padding-left: 7rem;

  @media (max-width: 800px) {
    padding: 10%;
    align-items: center;
  }
`
