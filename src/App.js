import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/HeaderComponent/Header";
import Body from "./components/BodyComponent/Body";
import About from "./components/AboutComponent/AboutComponent";
import Contact from "./components/ContactComponent/ContactComponent";
import Error from "./components/ErrorComponent/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenuComponent/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


// without children routes
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error/>
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);


// with routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // :resId (:) -> this is dynamic
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
