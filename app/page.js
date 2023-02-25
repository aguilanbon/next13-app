import Movie from "./Movie";
import MovieModal from "./MovieModal";

export default async function Home() {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDBAPI_KEY}&page=1`);

  const res = await data.json();

  return (
    <main>
      <div className="flex flex-wrap items-center justify-center pt-10">
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
      <MovieModal />
    </main>
  );
}
