import {BsMoon} from 'react-icons/bs'

export default function NavBar(){
    return(
        <>
        <nav className="fixed-top pt-4 pb-3 px-5 d-flex justify-content-between border-bottom">
            <h1 className="mx-4 px-2">Where in the world?</h1>
            <p className='d-flex justify-content-center align-items-center mx-4 my-1 color--button'>
              <BsMoon/>  Dark Mode</p>
        </nav>
        </>
    )
}