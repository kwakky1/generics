import React from "react";
import "./App.css";
import { Navigation, Footer } from "./components/common/index";

function App(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default App;
