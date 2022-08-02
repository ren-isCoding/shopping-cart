import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-wrap: break-word;
  }
  html {
    font-size: 62.5%; //1rem = 10px
    line-height: 1.6;

    @media (max-width: 600px ) {
      font-size: 50%;
    }

    @media (max-width: 400px) {
      font-size: 40%;
    }
  }
  body {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    font-family: 'Anek Malayalam', sans-serif;
    overflow-x: hidden;
    height: 100vh;
    overflow: hidden;

  }
  #root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    object-fit: contain;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    width: 100%;
  }
  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
