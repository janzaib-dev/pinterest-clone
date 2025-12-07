import './galleryItem.css'
import {Link} from "react-router-dom";
import Image from "../image/image.jsx";


const GalleryItem = ({image}) => {
    const optimizedHeight = (372 * image.height) / image.width
    return (
     <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(image.height/100)}`}}>

         <Image
             src={image.url}
                w='372'
             h={optimizedHeight}
             alt=""
         />
         <Link to={`/pin/${image._id}`}  className='overlay'/>

         <button className="saveBtn">Save</button>

         <div className='overlayIcons'>
             <button >
                 <img src='/general/share.svg' alt='share'/>
             </button>
             <button >
                 <img src='/general/more.svg' alt='share'/>
             </button>
         </div>
     </div>
    )
}
export default GalleryItem
