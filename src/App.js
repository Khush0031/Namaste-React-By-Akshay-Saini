import React from "react";
import ReactDom from "react-dom/client";
import {Header} from "./components/HeaderComponent/Header";
import Body from "./components/BodyComponent/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
