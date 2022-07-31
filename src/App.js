import React, { useState, useEffect } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponents/Homepage"
import Store from "./components/StoreComponents/Store"

export default function App() {
  const data = JSON.parse(localStorage.getItem("my-cart"))
  const [cart, setCart] = useState(data || [])
  const [isShoppingCartActive, setIsShoppingCartActive] = useState(false)

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart))
  }, [cart])

  return (
    <HashRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Homepage
              cart={cart}
              setCart={setCart}
              isShoppingCartActive={isShoppingCartActive}
              setIsShoppingCartActive={setIsShoppingCartActive}
            />
          }
        />
        <Route
          path="/store"
          element={
            <Store
              cart={cart}
              setCart={setCart}
              isShoppingCartActive={isShoppingCartActive}
              setIsShoppingCartActive={setIsShoppingCartActive}
            />
          }
        ></Route>
      </Routes>
    </HashRouter>
  )
}
