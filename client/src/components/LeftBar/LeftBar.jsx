import {sideBarLinks} from "../../constants/index.js";
import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                {sideBarLinks.map(link => (
                    <a href={link.route} key={link.route} className={`menuIcon `}>
                        <img src={link.icon} alt={link.text}   className={link.text === 'logo'? 'logo' : ''}  />
                    </a>
                ))}
            </div>
            <a href='/'  className={`menuIcon `}>
                <img src='/general/settings.svg' alt='settings'  />
            </a>
        </div>
    )
}
export default LeftBar
