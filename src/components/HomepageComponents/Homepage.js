import React from "react"
import bg from "../../assets/bg.jpg"
import styled from "styled-components"

export default function Homepage() {
  return <HomepageContainer></HomepageContainer>
}

const HomepageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`
