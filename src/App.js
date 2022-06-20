import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponents/Homepage"
import Store from "./components/StoreComponents/Store"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}
