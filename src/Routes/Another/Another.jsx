import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchHouses } from "../../slices/houseSlice";
import { useDispatch, useSelector } from "react-redux";

const Another = () => {
  // const [house, sethouse] = useState(null);

  //    `https://anapioficeandfire.com/api/houses/`

  const dispatch = useDispatch();
  const { houses, loading, hasErrors } = useSelector((store) => store.house);
  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  if (loading) return <h3>Loading Houses...</h3>;
  if (hasErrors) return <h3>Cannot display Houses...</h3>;

  return (
    <div className="App">
      <h1>Game of Thrones house</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div className="house">
        {houses?.map((house, index) => {
          return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
              <h1 class="w-full">house {index + 1}</h1>
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
