import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {

    const [movie, setMovie] = useState({});

    let { id } = useParams();

    useEffect(() => {
        const moviesList = [
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

        const currentMovie = moviesList.find(movie => movie.id == id)
        if(currentMovie != undefined) {
            setMovie(currentMovie)
        }
    }, [id]);

    return(
            <div className='w-full my-3 mx-5 flex flex-col'>
                <h2 className='text-3xl'>Movie: {movie.title}</h2>
                <p className="text-xs pt-2 pb-1 font-serif">{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</p>
                <hr className='border border-gray-300 w-full'></hr>
                <p className="pt-2">{movie.description}</p>
            </div>
    )
}

export default Movie