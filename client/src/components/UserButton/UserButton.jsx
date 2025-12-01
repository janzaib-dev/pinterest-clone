import "./userButton.css"
import {useState} from "react";

const UserButton = () => {
    const [open, setOpen] = useState(false)
    const currentUser = true;
    return currentUser ? (
        <div className='userButton'>
            <img src='/general/noAvatar.png' alt='user'/>
            <img onClick={()=>setOpen((prev)=>!prev)} src='/general/arrow.svg' alt='arrow' className='arrow'/>
            {
                open &&
            <div className='userOptions'>
                <div className='userOption'>Profile</div>
                <div className='userOption'>Setting</div>
                <div className='userOption'>Logout</div>
            </div>
            }
        </div>
    ) : (
        <a href='/login' className='loginLink'>Login / Sign Up</a>
    )
}
export default UserButton
