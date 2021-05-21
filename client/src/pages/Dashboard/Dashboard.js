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
        {/* <Form
          handleChange={(e) => setLocation(e.target.value)}
          onFormSubmit={handleFormSubmit}
        />  */}
        <Counter />

          {/* <Button style={{background:'red', color:'black'}} disabled={loading} className="w-35" type="submit">
              Sign Up 10 spots left!! */}
            {/* </Button> */}
            {/* <div>
          <footer
            className="footer"
            style={{
              fontFamily: "Texturina",
              color: "red",
              fontSize: "26px",
            }}
          >
            Scroll Down For Results{" "}
          </footer>
        </div> */}
      </Hero>
    
      {/* <Row>
        <Col
          style={{ fontFamily: 'Texturina' }}
          className="mt-5"
          size="md-6"
        >
           <p>Click on the heart to add the location to your favorites list!</p>
          <ListGroup className="mt-5">
            {dispensaries.map((dispensary) => (
              <DispensaryCard favorite={favorite} {...dispensary} />
            ))}
          </ListGroup>
        </Col>
      </Row> */}
    </div>
  );
} 

export default Dashboard;
