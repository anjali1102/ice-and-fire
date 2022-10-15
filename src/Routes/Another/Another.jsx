import React, { useState } from "react";
import axios from "axios";

const Another = () => {
  const [house, sethouse] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      `https://anapioficeandfire.com/api/houses/`
    );

    sethouse(response.data);
  };

  return (
    <div className="App">
      <h1>Game of Thrones house</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={fetchData}
        >
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="house">
        {house &&
          house.map((house, index) => {
            return (
              <div
                class="max-w-sm rounded overflow-hidden shadow-lg"
                key={index}
              >
                <h1 class="w-full">house {index + 1}</h1>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{house.name}</div>
                  {/* <p class="text-gray-700 text-base">{authors}</p> */}
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    📍{house.region} Region
                  </span>
                  {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {house.coatofArms} coatofArms
                  </span> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { Another };
