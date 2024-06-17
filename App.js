import React from "react";
import ReactDom from "react-dom/client";

// JSX -> HTML Like Syntax.

// React Element.

const element = <h1>Hello World!</h1>;

const heading = (
  <div>
    {element}
    <h1 id="heading" className="heading">
      Namaste <span>React🚀</span>.
    </h1>
  </div>
);

// React Component.

const Heading = () => {
  return (
    <>
      {heading}
      <h1 id="heading" className="heading">
        Heading
      </h1>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Heading />);
