import './gallery.css'
import {dummyImages} from "../../constants/index.js";
import GalleryItem from "../galleryItem/GalleryItem.jsx";

const Gallery = () => {
    return (
        <div className='gallery'>
            {dummyImages.map(image => (
                <GalleryItem key={image.id} image={image} />
            ))}
        </div>
    )
}
export default Gallery
