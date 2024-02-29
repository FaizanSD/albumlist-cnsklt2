import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import image1 from "../assets/marvel-characters-17q4msisguskv12b.jpg";
const AlbumCard = ({ album, albums, setAlbums }) => {
  const [title, setTitle] = useState(album.title);
  const [displayForm, setForm] = useState(false);
  const [userId, setUserId] = useState(album.userId);

  function updateDetails(id) {
    const updatedAlbums = albums.map((album) => {
      if (album.id === id) {
        return { ...album, title: title, userId: userId };
      } else {
        return album;
      }
    });

    setAlbums(updatedAlbums);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setForm(false);
    updateDetails(album.id);
  }

  function deleteAlbum(id) {
    const filtered = albums.filter((album) => album.id !== id);
    setAlbums(filtered);
  }

  return (
    <>
      <div className="card-container bg-auto bg-no-repeat bg-center w-96 h-52  flex flex-col justify-between rounded-md shadow-lg px-6 py-2">
        {displayForm ? (
          <form className="album-card-form flex items-center h-full justify-center">
            <div className="flex flex-col h-36 w-4/5 justify-between items-center ">
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
                Update Details
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="background-image rounded-md"></div>
            <div className="relative inline-block flex justify-center items-center ">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 opacity-50 rounded-lg"></div>
              <div className="relative z-10 text-black font-bold text-2xl">
                {album.title}
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                onClick={() => setForm(true)}
                type="button"
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
              >
                <FontAwesomeIcon className="mr-2" icon={faPenToSquare} />
                Update
              </button>
              <button
                onClick={() => deleteAlbum(album.id)}
                type="button"
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between px-3 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faTrashCan}
                  style={{ color: "#ff898ff" }}
                />
                Delete Album
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AlbumCard;
