import "./App.css";
import Footer from "./Components/Body/Footer";
import Navbar from "./Components/Body/Navbar";
import ContactUs from "./Components/Homepage/ContactUs";
import HubSpot from "./Components/Main/HubSpot";

function App() {
  return (
    <div className="hfeed site" id="page">
      <Navbar />
      <ContactUs />
      <Footer />

      {/* <HubSpot/> */}
    </div>
  );
}

export default App;
