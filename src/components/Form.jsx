import {useState} from "react";

export default function Form() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const handlePassword = (e) => {
        setNickname(e.target.value);
        console.log(nickname)
    }
    const handleNickname = (e) => {
        setPassword(e.target.value);
        console.log(password)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nickname)
        console.log(password)
    }
    return(
        <form onSubmit={handleSubmit}>
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