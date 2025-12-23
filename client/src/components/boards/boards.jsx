import './boards.css'
import Image from "../image/image.jsx";
import {useQuery} from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest.js";
import {format} from "timeago.js";
import {Link} from "react-router-dom";

const Boards = ({userId}) => {
    const {
        isPending,
        error,
        data
    } = useQuery({
        queryKey: ['boards', userId],
        queryFn:  () => apiRequest.get(`/boards/${userId}`).then(res => res.data)
    })

    if (isPending) return "Loading...";
    if (error) return "Something went wrong..." + error.message;
    if (!data) return "Board Not found"
    return (
        <div className="collections">
            {data?.map(board => (

                    <Link
                        to={`/search?boardId=${board._id}`}
                        className="collection"
                        key={board._id}
                    >
                        <Image
                            src={board.firstPin.url}
                            alt="pin"
                        />

                        <div className="collectionInfo">
                            <h1>{board.title}</h1>
                            <span>{board.pinCount} Pins - {format(board.createAt)} </span>
                        </div>
                    </Link>
                )
            )}

        </div>
    )
}
export default Boards
