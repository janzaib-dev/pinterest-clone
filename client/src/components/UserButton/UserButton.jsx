import "./userButton.css"
import {useState} from "react";
import IKImage from "../image/image.jsx";
import apiRequest from "../../utils/apiRequest.js";
import {useNavigate} from "react-router";


const UserButton = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const currentUser = true;

    const handleLogout=async()=>{
        try {
        await apiRequest.post('users/auth/logout',{})
        navigate('/auth')
        }catch (e){
            console.error(e)
        }
    }

    return currentUser ? (
        <div className='userButton'>
            <IKImage src='/general/noAvatar.png' alt='user'/>
            <div onClick={()=>setOpen((prev)=>!prev)}>

            <img  src='/general/arrow.svg' alt='arrow' className='arrow'/>
            </div>
            {
                open &&
            <div className='userOptions'>
                <div className='userOption'>Profile</div>
                <div className='userOption'>Setting</div>
                <div className='userOption' onClick={handleLogout}>Logout</div>
            </div>
            }
        </div>
    ) : (
        <a href='/login' className='loginLink'>Login / Sign Up</a>
    )
}
export default UserButton
