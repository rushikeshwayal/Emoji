import React, { useState, useEffect } from "react";

function Home() {
  // API Fetching
  const [emoji, setEmoji] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const response = await fetch('https://emoji-server-sand.vercel.app/');
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      setEmoji(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  // Pagination
  let [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 6;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const nPages = Math.ceil(emoji.length / recordPerPage);

  const Pre_Page = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const Next_Page = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [query, setQuery] = useState("");

  // Search and Filter Logic
  const On_input = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredEmojis = emoji.filter((e) =>
    e.unicodeName.toLowerCase().includes(query)
  );
  const paginatedEmojis = filteredEmojis.slice(firstIndex, lastIndex);

  // Rendering
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="flex justify-center flex-1">
        <form>
          <input
            type="text"
            className="w-80 mx-10 py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Search Emoji 😁"
            onChange={On_input}
          />
        </form>
      </div>

      <div className="pt-10 m-4">
        {paginatedEmojis.length > 0 ? (
          <ul className="flex flex-wrap justify-around gap-5 flex-1">
            {paginatedEmojis.map((e, index) => (
              <li
                key={index}
                className="flex flex-wrap justify-center items-center max-w-md w-[500px] h-[300px] text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <div className="flex flex-wrap w-full justify-center items-center">
                  <h1 className="text-center text-7xl">{e.character}</h1>
                  <p className="font-extrabold text-center text-xl w-[100%] p-5">
                    {e.unicodeName}
                  </p>
                </div>
                <p className="font-bold">{e.subGroup}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No emojis found...</p>
        )}
        <div>
          <ul className="flex justify-center space-x-5 mt-10">
            <li>
              <button
                className="border bottom-2 px-5 py-1 rounded-lg text-white font-bold bg-blue-500 hover:bg-blue-400"
                onClick={Pre_Page}
              >
                Prev
              </button>
            </li>
            <li>
              <span className="text-center font-bold text-sm">
                {currentPage} / {nPages}
              </span>
            </li>
            <li>
              <button
                className="border font-bold rounded-lg text-white bottom-2 px-5 py-1 bg-blue-500 hover:bg-blue-400"
                onClick={Next_Page}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
