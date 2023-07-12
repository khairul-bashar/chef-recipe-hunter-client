import React from "react";
import img from "../../../public/images/Rectangle 3.png";

const Owner = () => {
  return (
    <div className="py-20 bg-success">
      <h2 className="text-xl w-80 font-semibold mx-auto text-center">
        We Offer Healthy Food and Enjoyable Moments
      </h2>
      <hr className="w-1/5 mx-auto mt-8 border border-1 border-black"/>
      <div className="md:flex container w-4/5 mx-auto items-center gap-4">
        <img src={img} alt="" className="my-8" />
        <div>
          <p className=" ml-4">
            A chef owner is an individual who combines the roles of a
            professional chef and a business owner. They possess culinary
            expertise and business acumen, overseeing all aspects of a
            restaurant or food establishment. With a passion for food and
            creativity, chef owners excel in recipe development, culinary
            techniques, and food presentation. They also handle business
            responsibilities such as budgeting, inventory management, and
            marketing. Chef owners have a hands-on approach, managing kitchen
            operations, training staff, and ensuring quality. Their goal is to
            provide exceptional dining experiences while successfully running a
            profitable establishment. This dynamic role requires a blend of
            culinary skills, leadership abilities, and entrepreneurial spirit.
          </p>

          <span className="block underline mt-8 ml-4">John Doe</span>
          <span className="ml-6 mt-3 block">Owner</span>
        </div>
      </div>
    </div>
  );
};

export default Owner;
