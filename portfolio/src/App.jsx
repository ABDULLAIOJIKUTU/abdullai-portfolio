import React from "react";
import Navbar from "./components/Navbar.jsx";
import Button from "./components/Button.jsx";

const App = () => {
  return (
    <section className="w-full bg-[rgba(192,189,189,0.77)] py-6 px-6 h-screen rounded-4xl">
      <Navbar />
      <Button />
    </section>
  );
};

export default App;
