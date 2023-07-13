import React from 'react';

const RecipeList = ({recipe}) => {
    const {recipe_name, cooking_method, food_image, ratings, ingredient} = recipe;
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
                  <li key={index} className='text-sm'>{i}</li>
                ))}
                <span className="card-title">Ratings:{ratings}</span>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Favorite</button>
                </div>
              </div>
              <div>
                <h3 className='card-title mt-3 md:mt-0'>Cooking Method :-</h3>
                <p>{cooking_method}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RecipeList;