import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return(
        <div>
            <label 
                htmlFor={props.name}
                className="font-bold"
            >
                {props.title}
            </label>
            <input
                type={props.type}
                className={props.className}
                id={props.name}
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                value={props.value}
            />
            <div className={props.errorDiv}>
                {props.errorMsg}
            </div>
        </div>
    )
})

export default Input