"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Movie({
  title,
  poster_path,
  id,
  vote_average,
  overview,
  language,
  release_date,
}) {
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  const poster_uri = "https://image.tmdb.org/t/p/original";

  return (
    <Link href={`/${id}`}>
      <div
        className="flex flex-row m-4 relative "
        onMouseEnter={() => setShowMovieDetails(true)}
        onMouseLeave={() => setShowMovieDetails(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            src={poster_uri + poster_path}
            width={220}
            height={140}
            className={`rounded-lg cursor-pointer`}
            alt={title}
          ></Image>
        </div>
        <div
          className={`w-full bg-gray-900 opacity-90 h-1/2 absolute bottom-0 rounded-lg cursor-pointer transition-all ease-in delay-500 p-2 ${
            showMovieDetails ? `block` : `hidden`
          }`}
        >
          <div className="flex flex-col">
            <h1 className="text-xl">{title}</h1>
            <div className="w-full mt-2 flex justify-between">
              <div className="flex flex-col">
                <h1 className="">{language}</h1>
                <h1 className="">{release_date}</h1>
              </div>
              <h1 className="flex items-end">{vote_average} ⭐</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
