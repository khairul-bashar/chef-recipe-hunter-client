import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefList from "../ChefList";
import Hero from "../Hero";
import Owner from "../Owner";

const Home = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const data = useLoaderData();

  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true)
  };

  return (
    <div>
      {isLoading ? (
         <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <span className="loading loading-spinner text-green-400 text-3xl"></span>
    </div>
      ) : (
        <div>
          <Hero />
          <Owner />
          <div className="py-10">
            <h2 className="text-3xl font-semibold text-center">
              Introduce Our Best Chefs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 py-10  w-11/12 mx-auto">
              {data?.slice(0, showAll ? 6 : 4).map((sData) => (
                <ChefList key={sData._id} sData={sData}></ChefList>
              ))}
            </div>
            <div className="flex justify-center">
              {!showAll && (
                <span onClick={handleShowAll}>
                  <button className="btn btn-success">See More</button>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
