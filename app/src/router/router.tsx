import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "../pages/Steps/First";
import Second from "../pages/Steps/Second";
import Third from "../pages/Steps/Third";

const Routers = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<First />} />
        <Route path="second-step" element={<Second />} />
        <Route path="third-step" element={<Third />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default Routers;