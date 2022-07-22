import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponents/Homepage"
import Store from "./components/StoreComponents/Store"
import PcPartsList from "./utils/PcPartsList"

export default function App() {
  const [pcParts, setPcParts] = useState(PcPartsList)

  const [selectedItems, setSelectedItems] = useState([])

  const data = JSON.parse(localStorage.getItem("my-cart"))
  const [cart, setCart] = useState(data || [])

  const [isShoppingCartActive, setIsShoppingCartActive] = useState(false)

  const [searchValue, setSearchValue] = useState()

  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart))
  }, [cart])

  return (
    <BrowserRouter>
      <Routes>
        <Route
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
              setPcParts={setPcParts}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              cart={cart}
              setCart={setCart}
              isShoppingCartActive={isShoppingCartActive}
              setIsShoppingCartActive={setIsShoppingCartActive}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
