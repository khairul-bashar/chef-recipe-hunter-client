import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeList from "./RecipeList";

const ChefDetails = () => {
  const getId = useParams();
  
  const chefsData = useLoaderData();

  const [chefData, setChefData] = useState({});
  useEffect(() => {
    const newChefData =  chefsData && chefsData.find(chefData => chefData._id === getId.id)
    setChefData(newChefData)
  }, []);

  const { name, image, experience, number_of_recipes, likes, bio, recipes } =
    chefData;
  return (
    <div>
      <div className="bg-[url('/images/my-image.png')] bg-cover bg-center bg-no-repeat h-fit w-full">
        <div class="w-full h-full backdrop-brightness-50 flex items-center">
          <div className="md:flex items-center border w-4/5 mx-auto my-4 py-5 rounded-md">
            <img className="w-60 h-80 mx-6 rounded-md " src={image} alt="" />
            <div className="text-success text-xl px-6 py-10">
              <h2 className="text-2xl">
                <span className="font-semibold me-2">Name:</span> {name}
              </h2>
              <p className="my-3">
                <span className="font-semibold me-2">Experience:</span>
                {experience}
              </p>
              <p className="my-3">
                <span className="font-semibold me-2">Likes:</span>
                {likes}
              </p>
              <p className="my-3">
                <span className="font-semibold me-2">Recipes:</span>
                {number_of_recipes}
              </p>
              <p className="my-3 text-base">
                <span className="font-semibold me-2">Bio:</span>
                {bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-semibold text-center">Recipes List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {recipes?.map((recipe) => (
            <RecipeList key={recipe.ratings} recipe={recipe}></RecipeList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
