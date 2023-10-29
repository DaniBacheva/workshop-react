
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Search } from './components/Search'
import { UserList } from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
      <section class="card users-container">
        <Search />
<UserList />
</section>
      </main>
      <Footer />
    </>
  )
}

export default App
