import './galleryItem.css'
import {Link} from "react-router";
import {Image} from "@imagekit/react";
const GalleryItem = ({image}) => {
    const optimizedHeight = (372 * image.height) / image.width

    return (
     <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(image.height/100)}`}}>

         <Image
             urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
             src={image.url}
             transformation={[
                 {
                     height: optimizedHeight,
                     width: 372,
                 },
             ]}
             alt=""
             loading="lazy"
                 lqip={{ active: true, quality: 20,blur:20 }}
         />
         <Link to={`/pin/${image.id}`}  className='overlay'/>

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
