import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDBAPI_KEY}&page=1`);

  const res = await data.json();

  console.log(res);

  return (
    <main>
      <h1 className="">Next13</h1>
      <div className="flex flex-wrap items-center justify-center">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
