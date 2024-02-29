import React, { useState } from "react";

const NewAlbumForm = ({ albums, setAlbums, setForm }) => {
  const [title, setTitle] = useState(`Guest${albums.length + 1}`);
  const [userId, setUserId] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    setAlbums([...albums, { userId, id: albums.length + 1, title }]);
    setForm(false);
  }

  return (
    <div
      className="h-full flex justify-center items-center"
      style={{ backgroundImage: "url('./bglogo.jpg')" }}
    >
      <form className="w-2/6 h-72 bg-gray-100 flex flex-col items-center justify-center py-3 rounded-md mt-12">
        <h1 className="text-2xl text-bold">Add New Album</h1>
        <div className="flex flex-col h-full w-2/5 py-5 items-center justify-around">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="Enter New Title"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            onChange={(e) => setUserId(e.target.value)}
            type="number"
            id="user-id"
            placeholder="Enter New UserId"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
          >
            Add Album
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAlbumForm;
