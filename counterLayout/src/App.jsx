import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Promos from "./components/pages/Promos";
import Restaurants from "./components/pages/Restaurants";
import Checkout from "./components/pages/Checkout";
import "./index.scss";

function App() {
    return (
        <div className="mx-auto mt-10 max-w-6xl text-3xl">
            <div>Name: counter Layout</div>
            <div>Framework: react</div>
            <div>Language: JavaScript</div>
            <div>CSS: Tailwind</div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="promos" element={<Promos />} />
                <Route path="res" element={<Restaurants />} />
                <Route path="checkout" element={<Checkout />} />
            </Routes>
        </div>
    );
}
export default App;

const root = createRoot(document.getElementById("app"));
// console.log(root);
root.render(
  <StrictMode>
    <BrowserRouter basename="/counterLayout">
      <App />
    </BrowserRouter>
  </StrictMode>
);
