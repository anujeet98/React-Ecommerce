import CartProvider from "./contexts/CartProvider";
import AppBody from "./components/AppBody/AppBody";
import AppNavbar from "./components/Navbar/AppNavbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import { Fragment } from "react";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <AppNavbar />
        <AppBody />
      </CartProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <Fragment>
        <AppNavbar />
        <About />
      </Fragment>
    ),
  },
  {
    path: "/home",
    element: (
      <Fragment>
        <AppNavbar />
        <Home />
      </Fragment>
    ),
  },
  {
    path: "/movie",
    element: (
      <Fragment>
        <Movies/>
      </Fragment>
    ),
  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
