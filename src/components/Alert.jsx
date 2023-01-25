const Alert = (props) => {
    return(
        <>
            {props.message && props.message != "" && 
                <div className="border border-red-400 rounded-sm w-3/5 p-2 text-center text-red-600">
                    {props.message}
                </div>
            }
        </>
         
    )
}

export default Alert