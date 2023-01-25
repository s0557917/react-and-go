import { Link, Outlet, useNavigate } from "react-router-dom"
import { useState } from "react";
import Alert from "./components/Alert";

function App() {

  const [jwtToken, setJWTToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("")

  const navigate = useNavigate

  const logOut = () => {
    setJWTToken("")
    navigate("/login")
  }

  return (
    <div className="m-4">
      <div className="flex justify-between">
        <div className="text-3xl">
          <h1>Go watch a movie!</h1>
        </div>
        <div className={`${jwtToken == "" ? "bg-green-500" : "bg-red-500"} px-3 py-1 rounded-sm text-white font-bold`}>
          {jwtToken == ""
            ? <Link to="/login"><span>Login</span></Link>
            : <Link to="#" onClick={logOut}><span>Logout</span></Link>
          }
        </div>
      </div>
      <hr className="my border border-gray-300"></hr>

      <div className="py-2 flex">
        <nav className="w-1/12">
          <div className="flex flex-col my-2">
            <Link to="/" className="rounded-sm hover:bg-gray-200 p-2 border border-gray-300">Home</Link>
            <Link to="/movies" className="rounded-sm hover:bg-gray-200 p-2 border border-gray-300">Movies</Link>
            <Link to="/genres" className="rounded-sm hover:bg-gray-200 p-2 border border-gray-300">Genre</Link>
            {jwtToken != "" &&
              <>
                <Link to="/admin/movie/0" className="rounded-sm hover:bg-gray-200 p-2 border border-gray-300">Add Movie</Link>
                <Link to="/manage-catalogue" className="rounded-sm hover:bg-gray-200 p-2 border border-gray-300">Manage Catalogue</Link>
                <Link to="/graphql" className="rounded-sm hover:bg-gray-200 p-2 border border-gray-300">GraphQL</Link>
              </>
            }
          </div>
        </nav>
        <div className="w-full flex flex-col items-center">
          <Outlet context={{
            jwtToken, 
            setJWTToken, 
            setAlertMessage
          }}/>
          <Alert message={alertMessage}/>
        </div>
      </div>

    </div>
  )
}

export default App
