
import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Search } from './components/Search'
import { UserList } from './components/UserList'
import * as userService from './services/userService'

function App() {
    const [users, setUsers] = useState([])

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

    async function onUserCreateSubmit(e) {
        //stop reloading
        e.preventDefault();

        //take data from dom tree
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        //send ajax request to server
        const createdUser = await userService.create(data);

        //if success add new user to state
        setUsers(state => [...state, createdUser])

    }

    const onDeleteClick = async (userId)=> {
        //delete from server

        //delete fron state
    }



    return (
        <>
            <Header />
            <main>
                <section className="card users-container">
                    <Search />
                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onDeleteClick={onDeleteClick} />


                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
