import React from "react"
import styled from "styled-components"
import gif from "../../assets/gif/pcBuild.gif"

export default function Main() {
  return (
    <MainContainer>
      <span className="main-text">BUILD YOUR PC NOW</span>
      <img src={gif} />
      <span className="sub-text">Latest and greatest tech.</span>
      <span className="sub-text">Worldwide fast shipping.</span>
      <span className="sub-text">Competitive pricing.</span>
      <button>SHOP NOW</button>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: whitesmoke;
  width: 50rem;
`
