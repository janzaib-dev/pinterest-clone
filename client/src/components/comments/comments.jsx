import './comments.css'
import {useState} from "react";
import EmojiPicker from "emoji-picker-react";
import {useQuery} from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest.js";
import {format} from "timeago.js";
import IKImage from "../image/image.jsx";

const Comments = ({id}) => {
    const [open, setOpen] = useState(false)
    const {
        isPending,
        error,
        data
    } = useQuery({
        queryKey: ['comments', id],
        queryFn:  () => apiRequest.get(`/comments/${id}`).then(res => res.data)
    })

    if (isPending) return "Loading...";
    if (error) return "Something went wrong..." + error.message;

    console.log('comments response', data)
    return (
        <div className="comments">
            <div className="commentList">
                <span className="commentCount">{Array.isArray(data) ? data.length : 0} Comments</span>

                {Array.isArray(data) && data.length > 0 ? (
                    data.map((c) => (
                        <div className="comment" key={c._id}>
                            <IKImage
                                src={(c.user && c.user.img) || "/general/noAvatar.png"}
                                alt="user"
                            />
                            <div className={'commentContent'}>
                                <span className={'commentUsername'}>
                                    {c.user?.displayName || c.user?.username || 'Unknown User'}
                                </span>
                                <p className="commentText">{c.description}</p>
                                {c.createdAt && (
                                    <span className={"commentTime"}>
                                        {format(c.createdAt)}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{padding: '8px 0'}}>There isn't any comments for this pin yet. Be the first one to comment!</div>
                )}

            </div>

            <form className="commentForm">
                <input
                    type="text"
                    placeholder="Add a comment..."
                />

                <div className="emoji">
                    <div onClick={() => setOpen((prev) => !prev)}>🙂</div>
                    {open && <div className="emojiPicker">
                        <EmojiPicker/>
                    </div>}

                </div>
            </form>
        </div>
    )
}
export default Comments
