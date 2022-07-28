import React, { useState, useEffect } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponents/Homepage"
import Store from "./components/StoreComponents/Store"
import PcPartsList from "./utils/PcPartsList"

export default function App() {
  const [pcParts, setPcParts] = useState(PcPartsList)

  const [selectedFilter, setSelectedFilter] = useState([])

  const data = JSON.parse(localStorage.getItem("my-cart"))
  const [cart, setCart] = useState(data || [])

  const [isShoppingCartActive, setIsShoppingCartActive] = useState(false)

  const [searchValues, setSearchValues] = useState([])

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
              pcParts={pcParts}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              cart={cart}
              setCart={setCart}
              isShoppingCartActive={isShoppingCartActive}
              setIsShoppingCartActive={setIsShoppingCartActive}
              searchValues={searchValues}
              setSearchValues={setSearchValues}
            />
          }
        ></Route>
      </Routes>
    </HashRouter>
  )
}
