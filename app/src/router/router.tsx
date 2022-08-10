import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "../pages/Steps/First";

const Routers = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<First />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default Routers;