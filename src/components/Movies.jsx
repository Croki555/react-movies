import { Movie } from "./Movie";

const Movies = ({ movies }) => {
    return (
        <div className="movies">
            {movies.length ? (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
                    {movies.map(movie => (
                        <Movie key={movie.imdbID} {...movie}/>
                    ))}
                </div>
            ) : (
                <h4 className="m-0 text-primary">Movie/s not found!</h4>
            )}
        </div>
    );
}

export { Movies };