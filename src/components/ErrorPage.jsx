import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return(
        <div className="flex flex-col justify-center items-center h-screen ">
            <h1 className="text-6xl py-6">Oops!</h1>
            <p className="text-xl">Sorry, an unexpected error has occured.</p>
            <p className="font-light py-10">
                <em>{error.statusText || error.message}</em>
            </p>
        </div>
    )
}