import React, { useState } from "react";
import { toast } from "react-toastify";

const RecipeList = ({ recipe }) => {
  const { recipe_name, cooking_method, food_image, ratings, ingredient } =
    recipe;
  const [isLiked, setIsLiked] = useState(false);

  const hangleFavoriteBtn = () => {
    toast("Added in favorite");
    setIsLiked(true);
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="card bg-base-100 shadow-xl mt-10">
        <figure className="px-10 pt-10">
          <img src={food_image} alt="Shoes" className="rounded-xl h-fit" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipe name: {recipe_name}</h2>
          <div className="md:flex">
            <div className="me-9">
              <h3 className="card-title">Ingredient:</h3>
              {ingredient.map((i, index) => (
                <li key={index} className="text-sm">
                  {i}
                </li>
              ))}
              <span className="card-title">Ratings:{ratings}</span>
              <div className="card-actions mt-4">
                <button
                  onClick={hangleFavoriteBtn}
                  disabled={isLiked}
                  className={` w-[150px] py-3 rounded text-white my-2 ${
                    isLiked ? "bg-[#254f2f] cursor-not-allowed" : "bg-[#289944]"
                  }`}
                >
                  {isLiked ? "Favorited" : "Favorite"}
                </button>
              </div>
            </div>
            <div>
              <h3 className="card-title mt-3 md:mt-0">Cooking Method :-</h3>
              <p>{cooking_method}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
