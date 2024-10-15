import "./App.css";

import { Header } from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./component/footer/Footer";
import { Home } from "./component/home/Home";
import { Service } from "./component/servicesd/Service";
import { Login } from "./component/login/Login";
import { PageNotFound } from "./component/pagenotFound/PageNotFound";
import { About } from "./component/about/About";
import { View } from "./component/viewd/View";
import { DetailsOb } from "./component/object/ObjectD";
import { ProductLog } from "./component/logProduct/ProductLog.jsx";
import { useEffect, useState } from "react";
import { Login2 } from "./component/login/Login2.jsx";
import { LoginContextProvider } from "./context/logincotext/loginPopup.js";

function App() {
  const [loginToggle, setLoginToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoginToggle(!loginToggle);
    }, 2000);
  }, []);

  const toggleLoginHandler = () => {
    setLoginToggle(!loginToggle);
  };
  return (
    <>
      <LoginContextProvider value={{setLoginToggle, loginToggle}}>
        <BrowserRouter>
          <Header />
          {loginToggle && <Login2 togFunc={toggleLoginHandler} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='/login2' element={<Login2/>}/> */}
            <Route path="/about" element={<About />} />
            <Route path="/view/:serviceName" element={<View />} />
            <Route path="/sale_product" element={<ProductLog />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LoginContextProvider>
    </>
  );
}

export default App;
