import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// From micro counterLayout
// import Promos from "counterLayout/Promos";
// import Restaurants from "counterLayout/Res";
// import Checkout from "counterLayout/Checkout";
// import { Home } from "counterLayout/Home";
import Infor from "./Infor";
// ========================
import "./index.scss";

// const CounterLayoutRootAppHome = React.lazy(() => Home);
const CounterLayoutRootApp = React.lazy(() => import('Layout/App'));

export default function App() {
    return (
        <div className="app-root">
            <React.Suspense fallback="Loading">
                <Routes>
                    <Route path="/" element={<Infor />} />
                    <Route
                        path="/counterLayout/*"
                        element={<CounterLayoutRootApp />}
                    />
                </Routes>
            </React.Suspense>
        </div>
    );
}

const root = createRoot(document.getElementById("app"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
