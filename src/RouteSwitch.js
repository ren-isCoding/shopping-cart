import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import Store from "./components/Store"

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}