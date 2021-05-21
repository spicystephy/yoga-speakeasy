import React, { useState } from "react";
import { Button} from "react-bootstrap";
import Hero from "../../components/Hero";
// import Form from "../../components/Form";
// import DispensaryCard from "../../components/DispensaryCard";
// import { getDispensaries, addToFavorite } from "../../utils/API";
import Navbar from "../../components/Navbar";
import Counter from "../../components/Counter/Counter";

function Dashboard() {
  // const [dispensaries, setDispensaries] = useState([]);
  // const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // async function handleFormSubmit(e) {
  //   e.preventDefault();
  //   const { data } = await getDispensaries({
  //     location,
  //     limit: 10,
  //   });
  //   setDispensaries(data.businesses);
  //   setLocation("");
  // }

  // async function favorite({ uuid, dispensary }) {
  //   try {
  //     // const uuid = {data};
  //     // const dispensary = {data};
  //    await addToFavorite({
  //       uuid,
  //       dispensary,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Hero className="hero-container">
        <h1 className="m-5">Yoga Speakeasy</h1>
        <h2 className="m-2 p-3">Sign Up For Saturday Classes Now!</h2>
     
        <Counter />

          
        
      </Hero>
    
      
    </div>
  );
} 

export default Dashboard;
