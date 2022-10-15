import React, { useEffect } from "react";
import { fetchBooks } from "../../slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading, hasErrors } = useSelector((store) => store.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (loading)
    return (
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">
        Loading Books ⏳
      </h1>
    );
  if (hasErrors)
    return (
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">
        Cannot display Books...
      </h1>
    );

  return (
    <div className="p-4">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white ">
        Game of Thrones Books
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6, lg:grid-cols-4 gap-4 lg:gap-8 text-center	">
          {books?.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");
            return (
              <div>
                <div
                  className="max-w-sm rounded overflow-hidden white-lg bg-lime-400 rounded drop-shadow-lg  text-white font-bold"
                  key={index}
                >
                  <h1 className="w-full">Book {index + 1}</h1>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{book.name}</div>
                    <p className="text-white-700 text-base">{authors}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
                      {book.numberOfPages} pages
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      🏘{book.country}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {cleanedDate}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Home };
