import React, { useEffect } from "react";
import { fetchBooks } from "../../slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading, hasErrors } = useSelector((store) => store.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <h3>Loading Books...</h3>;
  if (hasErrors) return <h3>Cannot display Books...</h3>;
  //     "https://www.anapioficeandfire.com/api/books?pageSize=30"

  console.log(books);
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <div className="books">
        {books?.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(", ");
          return (
            <div
              class="max-w-sm rounded overflow-hidden white-lg bg-pink-400 hover:bg-pink-500 text-white font-bold"
              key={index}
            >
              <h1 class="w-full">Book {index + 1}</h1>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{book.name}</div>
                <p class="text-white-700 text-base">{authors}</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
                  {book.numberOfPages} pages
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  🏘{book.country}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {cleanedDate}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Home };
