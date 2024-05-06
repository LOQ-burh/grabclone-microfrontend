import React from "react";
import { createRoot } from 'react-dom/client';
// import TestComponents from './TestComponents';
import "./index.scss";

const App = () => (
  <div className="mt-10  mx-auto max-w-6xl">
    <div>Name: search</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    {/* <TestComponents /> */}
  </div>
);
createRoot(document.getElementById("app")).render(<App />);

