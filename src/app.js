import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/**Applayout
 * Header
 * body
 * footer
 * Applayout
 * **/
const AppLayout = () => {
  return (
    <>
      {/* header{logo, nav items} */}
      <Header />
      {/* body {search, filters, restaurant cards} */}
      <Body />
      {/* footer{copyright}    */}
      <Footer/>
    </>
  );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
