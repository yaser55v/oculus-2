import Closer from "../components/Closer";
import CloseView from "../components/CloseView";
import Demo from "../components/Demo";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Oculus from "../components/Oculus";
import Products from "../components/Products";
import Users from "../components/Users";
import WhatIn from "../components/WhatIn";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <Hero />
      <Oculus />
      <Feature />
      <Demo />
      <Closer />
      <Users />
      <WhatIn />
      <Products />
      {/* <CloseView /> */}
      <Footer />
    </>
  );
};
export default Home;
