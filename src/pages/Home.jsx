import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Cards from '../components/Cards'

function Home(){
    return(
        <>
        <NavBar/>
        <main className="px-5 ">
            <SearchBar/>
            <Cards/>
        </main>
        </>

    )
}

export default Home