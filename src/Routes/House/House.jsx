import React, { useEffect } from "react";
import { fetchHouses } from "../../slices/houseSlice";
import { useDispatch, useSelector } from "react-redux";

const House = () => {
  const dispatch = useDispatch();
  const { houses, loading, hasErrors } = useSelector((store) => store.house);

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  if (loading)
    return (
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">
        Loading Houses ⌚
      </h1>
    );
  if (hasErrors)
    return (
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">
        Cannot display Houses 😿
      </h1>
    );

  console.log(houses);
  return (
    <div className="p-4">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white ">
        Game of Thrones house
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6, lg:grid-cols-4 gap-4 lg:gap-8 text-center">
          {houses?.map((house, index) => {
            return (
              <div
                className="max-w-sm rounded overflow-hidden white-lg bg-lime-400 rounded drop-shadow-lg  text-white font-bold"
                key={index}
              >
                <h1 className="w-full font-bold text-lg">house {index + 1}</h1>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{house.name}</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    📍{house.region} Region
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { House };
