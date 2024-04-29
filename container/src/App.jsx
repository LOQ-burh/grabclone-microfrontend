import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Infor from "./Infor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ========================
import "./index.scss";

import Homes from "./pages/Homes";
import Promos from "./pages/Promos";

// const CounterLayoutRootApp = React.lazy(() => import("Layout/App"));

export default function App() {
    return (
        <div className="app-root">
            <Router>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Routes>
                        {/* <Route path="/" element={<Infor />} /> */}
                        <Route path="/" element={<Homes />} />
                        <Route path="/promostion" element={<Promos />} />
                    </Routes>
                </React.Suspense>
            </Router>
        </div>
    );
}
createRoot(document.getElementById("app")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
