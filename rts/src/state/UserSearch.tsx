import {useState} from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'God the Father', age: 16},
    {name: 'Heruziamchel', age: 2000},

]

const UserSearch: React.FC = () => {

    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    const onclick = () => {
        const foundUser = users.find((user)=> {
            return user.name === name
        })
        setUser(foundUser)
    }

    return (
        <div>
            user serch
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onclick}>Find user</button>
            <div>
                {user && user.name}
                {user && user.age}

            </div>
        </div>
    )
}

export default UserSearch