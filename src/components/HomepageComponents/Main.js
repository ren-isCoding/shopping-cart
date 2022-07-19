import React from "react"
import styled from "styled-components"
import gif from "../../assets/gif/pcBuild.gif"

export default function Main() {
  return (
    <MainContainer>
      <span className="main-text">BUILD YOUR PC NOW</span>
      <div className="gif-container">
        <img src={gif} />
        <a href="store" className="shop-btn">
          SHOP NOW
        </a>
      </div>
      <div className="sub-div">
        <span className="sub-text">LATEST AND GREATEST TECH.</span>
        <span className="sub-text">WORLDWIDE FAST SHIPPING.</span>
        <span className="sub-text">COMPETITIVE PRICING.</span>
      </div>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: whitesmoke;
  width: 50rem;

  @media (max-width: 800px) {
    width: 100%;
  }

  img {
    width: 50rem;
    margin-bottom: 1rem;
  }

  .main-text {
    font-size: 5rem;
    font-weight: bold;
    white-space: nowrap;
  }

  .gif-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .shop-btn {
    position: absolute;
    color: black;
    background: whitesmoke;
    font-weight: 600;
    letter-spacing: 0.2rem;
    padding: 0.7rem 2.4rem;

    &::before {
      position: absolute;
      border: 0.1rem solid #fff;
      box-sizing: border-box;
      content: " ";
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      transition: 200ms;
    }

    &:hover::before {
      transform: translate(0.5rem, 0.4rem);
    }
  }
  .sub-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
  }
  .sub-text {
    font-size: 2rem;
    margin: 0.2rem 0;
    background: black;
    padding: 0 1rem;
    letter-spacing: 0.2rem;
  }
`
