import React from "react"
import bg from "../../assets/img/bg.jpg"
import styled from "styled-components"
import Header from "./Header"

export default function Homepage() {
  return (
    <HomepageContainer>
      <Header />
    </HomepageContainer>
  )
}

const HomepageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  padding-top: 10rem;
  padding-left: 7rem;
`
