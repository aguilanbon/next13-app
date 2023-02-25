import Image from "next/image";

export default async function MovieDetails({ params }) {
  const { movie } = params;
  const poster_uri = "https://image.tmdb.org/t/p/original";

  const data = await fetch(`
https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.TMDBAPI_KEY}`);

  const res = await data.json();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={poster_uri + res.poster_path}
          width={300}
          height={220}
          className={`max-w-sm rounded-lg shadow-2xl`}
          alt={res.title}
        ></Image>
        <div>
          <h1 className="text-5xl font-bold">{res.title}</h1>
          <p className="py-6">{res.overview}</p>
          <button className="btn btn-primary">Watch Now!</button>
        </div>
      </div>
    </div>
  );
}
