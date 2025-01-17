import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Demo from "./pages/Demo";
import Privacy from "./pages/Privacy";
import { useEffect, useState } from "react";
import axios from "axios";
import { Background404 } from "./pages/Background404";




function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Function to retrieve visit count
    const getCount = async () => {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      try {
        const response = await axios.get(`${baseUrl}/getCount`);
        console.log("hey",response)
        setCount(response.data.count);
      } catch (error) {
        console.error(error);
        console.log("what is the error",error);
      }
    };

    getCount(); // Call the function when the component mounts
  }, []);


useEffect(()=>{
  const incrementCount = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    try {
      await axios.post(`${baseUrl}/increment`);
      setCount(count + 1);
    } catch (error) {
      console.error(error);
    }
  };
  incrementCount();
},[])



  

  return (
    <div className=" overflow-x-hidden relative h-full w-full">
      
      <Navbar   />
      

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/" element = {<Home/>} />
        <Route path="/service" element={<Services />} />
        <Route path="/pricing" element = {<Pricing/>} />
        <Route path="/faq" element = {<Faq/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/hiring" element = {<Hiring/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>

        {/* <Route path="*">
            <Background404 />
          </Route> */}

<Route path="*" element={<Background404 />} /> 
      </Routes>

    </div>
    )
}

export default App;
