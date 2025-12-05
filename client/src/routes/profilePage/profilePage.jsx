
import './profilePage.css'
import {useState} from "react";
import Gallery from "../../components/gallery/Gallery.jsx";
import Collections from "../../components/collections/collections.jsx";


const ProfilePage = () => {
    const [type, setType] = useState("saved");
    return (
        <div className="profilePage">
            <img src='/general/noAvatar.png' alt='user'/>
                <span>John dee</span>
                <h1 className='profileUsername'>@johandee</h1>
                <div className='followCounts'>
                    10 followers - 20 followings
                </div>
            <div className='profileInteractions'>
                <img src='/general/share.svg' alt='share'/>
                <div className='profileButtons'>
                    <button>Message</button>
                    <button>Follow</button>
                </div>
                <img src='/general/more.svg' alt='more'/>
            </div>
            <div className='profileOptions'>
            <span  onClick={()=> setType('created')} className={type==="created" ? "active": ''}>Created</span>
            <span  onClick={()=> setType('saved')} className={type==="saved" ? "active": ''}>Saved</span>
            </div>
            {type==="created" ? <Gallery/>: <Collections/>}
        </div>
    )
}
export default ProfilePage
