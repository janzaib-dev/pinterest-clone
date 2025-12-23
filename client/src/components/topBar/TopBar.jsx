import UserButton from "../UserButton/UserButton.jsx";
import './topBar.css'
import {useNavigate} from "react-router";

const TopBar = () => {

        const navigate = useNavigate();

    const  handleSubmit= (e)=>{
        e.preventDefault();

        navigate('/search?search='+e.target.elements[0].value.trim()+'')

    }
    return (
        <div className='topBar'>
            <form onSubmit={handleSubmit} className='search'>
                <img src='/general/search.svg' alt='search'/>
            <input type='text' placeholder='Search'/>
            </form>
        <UserButton />
        </div>
    )
}
export default TopBar
