"use client";

import Image from "next/image";
import { useState } from "react";

export default function Movie({ title, poster_path }) {
  const [showMovieDetails, setShowMovideDetails] = useState(false);

  const poster_uri = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="flex flex-row m-4 relative "
      onMouseEnter={() => setShowMovideDetails(true)}
      onMouseLeave={() => setShowMovideDetails(false)}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={poster_uri + poster_path}
          width={220}
          height={140}
          className={`rounded-lg cursor-pointer`}
        ></Image>
      </div>
      <div
        className={`w-full bg-gray-900 opacity-90 h-3/4 absolute bottom-0 rounded-lg cursor-pointer transition-all ease-in delay-500 p-2 ${
          showMovieDetails ? `block` : `hidden`
        }`}
      >
        <h1>{title}</h1>
      </div>
    </div>
  );
}
