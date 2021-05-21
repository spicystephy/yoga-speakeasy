import React, { useState } from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Counter from "../../components/Counter/Counter";

function Dashboard() {
  // const [loading, setLoading] = useState(false);

  return (
    <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   // alignItems: "center",
      //   flexDirection: "column",
      // }}
    >
      <Navbar />
      <Hero className="hero-container margin-20px">
        <h1 className="m-5 text-black">Yoga Speakeasy</h1>
        <h2 className="m-2 p-3">Sign Up For Saturday Classes Now!</h2>

        <Counter />
      </Hero>
    </div>
  );
}

export default Dashboard;
