import CartProvider from "./contexts/CartProvider";
import AppBody from "./components/AppBody/AppBody";
import AppNavbar from "./components/Navbar/AppNavbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
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
      <CartProvider>
        <AppNavbar />
        <About />
      </CartProvider>
    ),
  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
