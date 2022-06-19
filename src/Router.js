import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponents/Homepage"
import Store from "./components/StoreComponents/Store"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}
