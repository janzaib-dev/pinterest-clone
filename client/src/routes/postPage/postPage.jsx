import {Image} from "@imagekit/react";
import {Link} from "react-router-dom";
import PostInteractions from "../../components/PostInteractions/PostInteractions.jsx";
import Comments from "../../components/comments/comments.jsx";
import './postPage.css'
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router";
import apiRequest from "../../utils/apiRequest.js";

const PostPage = () => {
    const {id} = useParams();

    const {
        isPending,
        error,
        data
    } = useQuery({
        queryKey: ['pin', id],
        queryFn:  () => apiRequest.get(`/pins/${id}`).then(res => res.data)
    })

        if(isPending) return "Loading...";
        if(error) return "Something went wrong..." + error.message;
        if(!data) return "Pin Not Found"

    return (
        <div className="postPage">
            <svg
                height="20"
                viewBox="0 0 24 24"
                width="20"
                style={{cursor: "pointer"}}
            >
                <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
            </svg>
            <div className="postContainer">
                <div className={"postImg"}>
                    <Image
                        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
                        src={data.url}
                        alt="pin"
                    />

                </div>
                <div className="postDetails">
                    <PostInteractions/>
                    <Link
                        to={`/${data.user.username}`}
                        className="postUser"
                    >
                        <Image
                            urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
                            src={data.user.img || "/general/noAvatar.png"}
                            alt="user"
                        />
                        <span>{data.user.displayName}</span>
                    </Link>
                    <Comments id={data._id}/>
                </div>
            </div>
        </div>
    )
}
export default PostPage
