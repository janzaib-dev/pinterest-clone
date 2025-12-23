import './profilePage.css'
import {useState} from "react";
import Gallery from "../../components/gallery/Gallery.jsx";
import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest.js";
import {Image} from "@imagekit/react";
import Boards from "../../components/boards/boards.jsx";


const ProfilePage = () => {
    const [type, setType] = useState("saved");

    const {username} = useParams();
    const {
        isPending,
        error,
        data
    } = useQuery({
        queryKey: ['profile', username],
        queryFn:  () => apiRequest.get(`/users/${username}`).then(res => res.data)
    })

    if(isPending) return "Loading...";
    if(error) return "Something went wrong..." + error.message;
    if(!data) return "user Not Found"

    console.log(data)
    return (
        <div className="profilePage">
            <Image src={data.img || '/general/noAvatar.png'} alt='user' w={100} h={100}  className='profileImg'/>
                <span>{data.displayName}</span>
                <h1 className='profileUsername'>{data.username}</h1>
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
            {type==="created" ? <Gallery userId={data._id}/>: <Boards userId={data._id}/>}
        </div>
    )
}
export default ProfilePage
