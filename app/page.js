import Movie from "./Movie";
import MovieModal from "./MovieModal";

export default async function Home() {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDBAPI_KEY}&page=1`);

  const res = await data.json();

  return (
    <main>
      <div className="flex flex-col min-h-screen flex-wrap items-center justify-center pt-20">
        <div className="w-full flex items-center justify-center mb-5">
          <h1 className="text-2xl">Popular Movies</h1>
        </div>
        <div className="w-full min-h-screen flex flex-row flex-wrap items-center justify-center">
          {res.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              vote_average={movie.vote_average}
              overview={movie.overview}
              title={movie.title}
              language={movie.original_language}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </div>
      <MovieModal />
    </main>
  );
}
