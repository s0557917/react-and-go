import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description..."
            },
            {
                id: 2,
                title: "Raiders of the Lost Ark",
                release_date: "1981-06-12",
                runtime: 115,
                mpaa_rating: "PG-13",
                description: "Some long description..."
            },
        ]

        setMovies(moviesList)
    }, []);

    return(
            <div className='w-full m-2 flex flex-col'>
                <h2 className='px-2 text-2xl text-center'>Movies</h2>
                <hr className='border border-gray-300 w-full m-2'></hr>

                <ul>
                    {movies.map(movie => 
                        <li 
                            key={movie.id}
                            className="flex justify-between"
                        >
                            <Link to={`/movies/${movie.id}`}>
                                {movie.title}
                            </Link>
                            <p>{movie.release_date}</p>
                            <p>{movie.mpaa_rating}</p>
                        </li>
                    )}
                </ul>
            </div>
    )
}

export default Movies