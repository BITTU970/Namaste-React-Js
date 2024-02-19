import React from "react";
import ReactDOM from "react-dom/client";
import Haeder from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="container">
      <Haeder />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
