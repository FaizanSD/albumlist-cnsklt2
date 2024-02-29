import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AlbumContext = createContext();

const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        console.log("context:", response);
        setAlbums(response.data);
      });
  }, []);

  return (
    <AlbumContext.Provider value={{ albums, setAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
};

export const AlbumState = () => {
  return useContext(AlbumContext);
};

export default AlbumProvider;
