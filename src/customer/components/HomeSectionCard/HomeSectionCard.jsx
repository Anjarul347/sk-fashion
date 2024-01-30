import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    
    <div className="flex flex-col items-center overflow-hidden bg-white rounded-lg shadow-lg shadow-red-600 cursor-pointer w-[15rem] mx-3 mb-4 ">
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top h-[13rem] w-[10rem] rounded-md "
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-8">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
   
  );
};

export default HomeSectionCard;
