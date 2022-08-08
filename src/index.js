import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import NotificationProvider from "./components/NotificationComponents/NotificationProvider"
import GlobalStyle from "./styles/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
)
