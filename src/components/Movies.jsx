import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch(`http://localhost:8080/movies`, requestOptions)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(err => console.log("Error: ", err))
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