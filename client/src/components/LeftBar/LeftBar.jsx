import {sideBarTLinks} from "../../constants/index.js";
import './leftBar.css'
import {Link} from "react-router";

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                {sideBarLinks.map(link => (
                    <Link to={link.route} key={link.route} className={`menuIcon `}>
                        <img src={link.icon} alt={link.text}   className={link.text === 'logo'? 'logo' : ''}  />
                    </Link>
                ))}
            </div>
            <a href='/'  className={`menuIcon `}>
                <img src='/general/settings.svg' alt='settings'  />
            </a>
        </div>
    )
}
export default LeftBar
