import UserButton from "../UserButton/UserButton.jsx";
import './topBar.css'

const TopBar = () => {
    return (
        <div className='topBar'>
            <div className='search'>
                <img src='/general/search.svg' alt='search'/>
            <input type='text' placeholder='Search'/>
            </div>
        <UserButton />
        </div>
    )
}
export default TopBar
