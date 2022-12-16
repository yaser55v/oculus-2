import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SplashScreen {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
