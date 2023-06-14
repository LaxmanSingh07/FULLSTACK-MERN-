import React, { useEffect } from "react";
import { apiUrl, filterData } from "./data";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

const App = () => {
  //api call

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    //fetch data from api
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };

  
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <Filter filterData={filterData} />
      </div>
      <div>
      <Cards courses={courses} />
      </div>
    </div>
  );
};

export default App;
