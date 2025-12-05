import {Image as IKImage} from "@imagekit/react";

const Image = ({src, height,className,width,alt}) => {
    return (

        <IKImage
            urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
            src={src}
            transformation={[
                {
                    height,
                    width,
                },
            ]}
            alt={alt}
            loading="lazy"
            className={className}
            lqip={{ active: true, quality: 20,blur:20 }}
        />
    )
}
export default Image
