import React from "react";
import Navbar from "./components/Navbar.jsx";
import Button from "./components/Button.jsx"; 


const App = () => {
  return (
    <section className="w-full bg-[#c0bdbdc5] py-6 px-6 h-screen rounded-4xl">
      <Navbar />
      <Button />
      <Hero />
    </section>
  );
};

export default App;
