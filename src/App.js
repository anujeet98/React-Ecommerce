import { Fragment, useContext } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import CartProvider from "./contexts/CartProvider";
import Store from "./components/AppBody/Store";
import AppNavbar from "./components/UI/Navbar/AppNavbar";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Contact from "./components/Contact/Contact";
import CartButton from "./components/UI/CartButton/CartButton";
import Product from "./components/Product/Product";
import Login from "./components/Authentication/Login";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import AuthContext from "./contexts/auth-context";
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
  const authCtx = useContext(AuthContext);
  return (
    <Switch>
      <Route path='/login'>
        {!authCtx.authToken ? <Fragment><AppNavbar/><Login/></Fragment> : <Redirect to='/home'/>}
      </Route>
      <Route path='/store'>
        {authCtx.authToken ? <CartProvider><AppNavbar><CartButton/></AppNavbar><Store/></CartProvider> : <Redirect to='/login'/>}
      </Route>      
      <Route path='/home'>
        <Fragment><AppNavbar/><Home/></Fragment>
      </Route>
      <Route path='/about'>
        <Fragment><AppNavbar/><About/></Fragment>
      </Route>
      <Route path='/movie'>
        {authCtx.authToken ? <Fragment><AppNavbar/><Movies/></Fragment> : <Redirect to='/login'/>}
      </Route>
      <Route path='/contact'>
      <Fragment><AppNavbar/><Contact/></Fragment>
      </Route>
      <Route path='/products/:productid'>
        {authCtx.authToken ? <Fragment><AppNavbar/><Product/></Fragment> : <Redirect to='/login'/>}
      </Route>
      <Route path='*'>
        {authCtx.authToken ? <Redirect to='/store'></Redirect> : <Redirect to='/login'/>}
      </Route>
    </Switch> 
  );
}

export default App;
