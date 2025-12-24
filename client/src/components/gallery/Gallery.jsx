import './gallery.css'
import GalleryItem from "../galleryItem/GalleryItem.jsx";
import {useInfiniteQuery,} from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";


const fetchPins = async ({
    pageParam,
    search,
    userId,
    boardId
}) => {
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${search ||
    ''}&userId=${userId || ''}&boardId=${boardId || ''}`)
    return res.data
}

const Gallery = ({
    search,
    userId,
    boardId
}) => {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        status
    } = useInfiniteQuery({
        queryKey:         ['pins', search, userId, boardId],
        queryFn:          ({pageParam = 0}) => fetchPins({
            pageParam,
            search,
            userId,
            boardId
        }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor
    })


    if (status === "pending") return "Loading...";
    if (status === "error") return "Something went wrong...";

    const allPins = data?.pages.flatMap(page => page.pins) || []

    return (
        <InfiniteScroll
            dataLength={allPins.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<h4>Loading more pins</h4>}
            endMessage={<h3>All Post Loaded!</h3>}
        >

            <div className="gallery">
                {allPins?.map(image => (
                    <GalleryItem
                        key={image._id}
                        image={image}
                    />
                ))}
            </div>
        </InfiniteScroll>
    )
}
export default Gallery
