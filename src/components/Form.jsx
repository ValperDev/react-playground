import {useState} from "react";

export default function Form() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const handlePassword = () => {

    }
    const handleNickname = () => {
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form onSubmit={}>
            <fieldset>
                <legend>User Info</legend>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" name="nickname" id="nickname" value={nickname} onChange={handleNickname}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePassword}/>
                <button>Submit</button>
            </fieldset>
        </form>
    )
}