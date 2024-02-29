import React, { useState } from "react";
import { AlbumState } from "../AlbumProvider";
import AlbumCard from "./AlbumCard";
import NewAlbumForm from "./NewAlbumForm";

const Homepage = ({ displayForm, setForm }) => {
  const { albums, setAlbums } = AlbumState();

  console.log(albums);
  return (
    <div className="h-full">
      {displayForm ? (
        <div className="h-full">
          <NewAlbumForm
            albums={albums}
            setAlbums={setAlbums}
            setForm={setForm}
          />
        </div>
      ) : (
        <div className="w-full px-12 py-6">
          <div className="album-container bg-gray-100 p-12 w-full h-full  flex flex-wrap justify-center grow gap-10 bg-black overflow-y-scroll">
            {albums.map((album) => (
              <AlbumCard album={album} albums={albums} setAlbums={setAlbums} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
