
import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Search } from './components/Search'
import { UserList } from './components/UserList'
import * as userService from './services/userService'

function App() {
    const [users, setUsers] = useState([0])

    useEffect(() => {
        userService.getAll()
            .then(users => {
                setUsers(users);
                console.log(users)
            })
            .catch(err => {
                console.log("Error" + err);
            });
    }, []);

    return (
        <>
            <Header />
            <main>
                <section className="card users-container">
                    <Search />
                    <UserList users={users}/>
                    <button className="btn-add btn">Add new user</button>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
