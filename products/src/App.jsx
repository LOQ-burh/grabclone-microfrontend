import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.scss";

// import TestComponent from "./TestComponents";

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <div>Name: products</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    {/* <TestComponent /> */}
  </div>
);
createRoot(document.getElementById("app")).render(<App />);

