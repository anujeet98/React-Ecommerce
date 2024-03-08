import { Fragment } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "react-router-dom";

import CartProvider from "./contexts/CartProvider";
import Store from "./components/AppBody/Store";
import AppNavbar from "./components/UI/Navbar/AppNavbar";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Contact from "./components/Contact/Contact";
import CartButton from "./components/UI/CartButton/CartButton";
// //BELOW IS AVAILABLE IN REACT_ROUTER - V6
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <CartProvider>
//         <AppNavbar />
//         <AppBody />
//       </CartProvider>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <Fragment>
//         <AppNavbar />
//         <About />
//       </Fragment>
//     ),
//   },
//   {
//     path: "/home",
//     element: (
//       <Fragment>
//         <AppNavbar />
//         <Home />
//       </Fragment>
//     ),
//   },
//   {
//     path: "/movie",
//     element: (
//       <Fragment>
//         <Movies/>
//       </Fragment>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <Fragment>
//         <Movies/>
//       </Fragment>
//     ),
//   }
// ]);
// <RouterProvider router={router} />


function App() {
  return (
    <div>
      <Route path='/store'>
        <CartProvider><AppNavbar><CartButton/></AppNavbar><Store/></CartProvider>
      </Route>      
      <Route path='/home'>
        <Fragment><AppNavbar/><Home/></Fragment>
      </Route>
      <Route path='/about'>
        <Fragment><AppNavbar/><About/></Fragment>
      </Route>
      <Route path='/movie'>
        <Movies/>
      </Route>
      <Route path='/contact'>
      <Fragment><AppNavbar/><Contact/></Fragment>
      </Route>
    </div>
  );
}

export default App;
