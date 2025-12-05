import './comments.css'
import {useState} from "react";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className='comments'>
            <div className='commentList'>
                <span className='commentCount'>5 Comments</span>

            <div className='comment'>
                <img src='/general/noAvatar.png' alt='user'/>
                <div className={'commentContent'}>
                    <span className={'commentUsername'}>
                        john doe
                    </span>
                    <p className='commentText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aspernatur atque corporis culpa cupiditate dicta dignissimos doloremque explicabo facere facilis fugit harum illo, illum ip.</p>
                    <span className={"commentTime"}> 1h</span>
                </div>
            </div>    <div className='comment'>
                <img src='/general/noAvatar.png' alt='user'/>
                <div className={'commentContent'}>
                    <span>
                        john doe
                    </span>
                    <p className='commentText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aspernatur atque corporis culpa cupiditate dicta dignissimos doloremque explicabo facere facilis fugit harum illo, illum ip.</p>
                    <span className={"commentTime"}> 1h</span>
                </div>
            </div>    <div className='comment'>
                <img src='/general/noAvatar.png' alt='user'/>
                <div className={'commentContent'}>
                    <span>
                        john doe
                    </span>
                    <p className='commentText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto aspernatur atque corporis culpa cupiditate dicta dignissimos doloremque explicabo facere facilis fugit harum illo, illum ip.</p>
                    <span className={"commentTime"}> 1h</span>
                </div>
            </div>

            </div>

            <form className='commentForm'>
                    <input type='text' placeholder='Add a comment...'/>

                 <div className='emoji'>
                    <div onClick={()=>setOpen((prev)=> !prev)}>🙂</div>
                     {open && <div className='emojiPicker'>
<EmojiPicker />
                     </div>}

                </div>
            </form>
        </div>
    )
}
export default Comments
