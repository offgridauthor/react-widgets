import {useState} from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'God the Father', age: 16},
    {name: 'Heruziamchel', age: 2000},

]

const UserSearch: React.FC = () => {

    const [name, setName] = useState('')

    const onclick = () => {
        const foundUser = users.find((user)=> {
            return user.name === name
        })
        console.log(foundUser)

    }

    return (
        <div>
            user serch
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onclick}>Find user</button>
        </div>
    )
}

export default UserSearch