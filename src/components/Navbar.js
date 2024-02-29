import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { AlbumState } from "../AlbumProvider";

const Navbar = ({ setForm }) => {
  return (
    <>
      <div className="w-full bg-teal-600 bg-black h-20 md:h-20 flex items-center justify-between sm-justify-around px-10 py-3">
        <div className="album-logo w-48 text-3xl flex items-center justify-around">
          <FontAwesomeIcon
            className="text-4xl"
            icon={faImage}
            style={{
              "--fa-primary-color": "#31b0c9",
              "--fa-secondary-color": "#31b0c9",
            }}
          />
          <h1>Album List</h1>
        </div>
        <div className="addform flex">
          <Button
            onClick={() => setForm(true)}
            size="lg"
            color="white"
            className="flex items-center gap-3"
          >
            <FontAwesomeIcon className="text-2xl" icon={faCirclePlus} />
            Add Album
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
