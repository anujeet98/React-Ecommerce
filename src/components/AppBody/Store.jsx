import { Fragment } from "react";
// import classess from "./AppBody.module.css";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import Body from "./Body/Body";

const AppBody = () => {
  return (
    <Fragment>
      <Header/>
      <Body/>
      <Footer />
    </Fragment>
  );
};

export default AppBody;
