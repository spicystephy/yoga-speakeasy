import React from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Counter from "../../components/Counter/Counter";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "./Dashboard.css"

function Dashboard() {
  // const [loading, setLoading] = useState(false);
  // const dateValue =  new Date(
  //   new Date().getFullYear(),
  //   new Date().getMonth(),
  //   20
  // );
  return (
    <div>
      <Navbar />
      <Hero className="hero-container">
        <div>
          <h1 className="m-5">Yoga Speakeasy</h1>
          <h2 className="m-2 p-3" >Sign Up For Saturday's 10AM Class Now!</h2>
        </div>
        <Counter />
        {/* <CalendarComponent value={dateValue}></CalendarComponent> */}
      </Hero>
    </div>
  );
}

export default Dashboard;
