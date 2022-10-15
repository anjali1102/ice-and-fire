import React, { useEffect } from "react";
import { fetchHouses } from "../../slices/houseSlice";
import { useDispatch, useSelector } from "react-redux";

const Another = () => {
  const dispatch = useDispatch();
  const { houses, loading, hasErrors } = useSelector((store) => store.house);

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  if (loading) return <h3>Loading Houses...</h3>;
  if (hasErrors) return <h3>Cannot display Houses...</h3>;

  console.log(houses);
  return (
    <div className="App">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">
        Game of Thrones house
      </h1>

      <div className="house">
        {houses?.map((house, index) => {
          return (
            <div
              class="max-w-sm rounded overflow-hidden shadow-lg bg-lime-400 text-white"
              key={index}
            >
              <h1 class="w-full font-bold text-lg">house {index + 1}</h1>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{house.name}</div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  📍{house.region} Region
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Another };
