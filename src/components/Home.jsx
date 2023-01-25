import Ticket from './../images/ticket.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <div className='w-full m-2 flex flex-col items-center'>
                <h2 className='px-2 text-2xl'>Find a movie to watch tonight!</h2>
                <hr className='border border-gray-300 w-full m-2'></hr>
                <Link to="/movies">
                    <img 
                        src={Ticket} 
                        alt="Movie tickets" 
                        width={200}
                        className="p-2"
                        
                    >
                    </img>
                </Link>
            </div>
        </>
    )
}

export default Home