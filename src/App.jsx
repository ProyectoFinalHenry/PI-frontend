import { Route, Routes, Navigate } from "react-router-dom";
import LandinPage from "./views/LandinPage/LandingPage";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import About from "./views/About/About";
import CreateForm from "./views/CreateForm/CreateForm";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import SignIn from "./components/Sign-in/SignIn";
import SignUp from "./components/Sign-up/SignUp";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import  UserProfile from "./views/UserProfile/UserProfile.jsx"
import UserAddress from "./views/UserAddress/UserAddress";
import Purchases from "./views/Purchases/Purchases";


function App() {

 
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route path="/Products" element={<Home />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/products/page/:page?" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/account" element={ <UserProfile />} />
        <Route path="/shoppingCart" element={ <ShoppingCart />} />
        <Route path="/auth/sing-in" element={ <SignIn />} />
        <Route path="/auth/sing-up" element={<SignUp />} />
        <Route path="/user/account" element={<UserProfile />} />
        <Route path="/user/address" element={ <UserAddress />} />
        <Route path="/purchases" element={<Purchases/>} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
