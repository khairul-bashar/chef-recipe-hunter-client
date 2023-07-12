import React from "react";
import { Link } from "react-router-dom";

const ChefList = ({ sData }) => {
  // console.log(sData);
  const {_id, name, image, experience, number_of_recipes, likes } = sData;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl h-96">
        <figure>
          <img className="h-full w-80"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="grow-0"><span className="font-semibold">Experience:</span> {experience}</p>
          <span><span className="font-semibold">Likes: </span>{likes}</span>
          <span className="grow"><span className="font-semibold">Recipes:</span> {number_of_recipes}</span>
          <div className="card-actions justify-start">
            <Link to={`/chef-details/${_id}`} className="btn  btn-success">View recipes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefList;
