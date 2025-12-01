import './galleryItem.css'
const GalleryItem = ({image}) => {
    return (
     <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(image.height/100)}`}}>
         <img src={image.url} />
     </div>
    )
}
export default GalleryItem
