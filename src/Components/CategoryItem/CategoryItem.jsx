import React from "react";

export default function CategoryItem({ category }) {
  return (
    <div className="shadow hover:shadow-lg hover:shadow-green-600 duration-500 rounded-lg p-4 flex flex-col cursor-pointer">
      <div className="grow">
        <img
          className="h-full w-full object-cover object-center"
          src={category.image}
          alt=""
        />
      </div>
      <div>
        <h5 className="text-green-600 dark:text-white my-3 font-semibold text-center text-2xl">
          {category.name}
        </h5>
      </div>
    </div>
  );
}
