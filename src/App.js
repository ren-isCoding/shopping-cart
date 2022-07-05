import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponents/Homepage"
import Store from "./components/StoreComponents/Store"
import PcPartsList from "./utils/PcPartsList"

export default function App() {
  const [pcParts, setPcParts] = useState(PcPartsList)
  const [selectedItems, setSelectedItems] = useState([])
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
