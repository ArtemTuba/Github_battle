import { useState, memo } from "react";

const PlayerInput = memo(({id, label, onSubmit}) => {
    const [userName, setUserName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(id,userName)
    };
    

    return(
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor={label}>{label}</label>
            <input
                id={label}
                type="text" 
                value={userName}
                placeholder="UserName"
                autoComplete="off"
                onChange={(event)=> setUserName(event.target.value)}
            />
            <button disabled={!userName.length} className="button" type="submit">
                Submit
            </button>
        </form>
    )
})

export default PlayerInput;