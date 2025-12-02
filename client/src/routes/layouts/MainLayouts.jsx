import {Outlet} from "react-router";
import LeftBar from "../../components/LeftBar/LeftBar.jsx";
import TopBar from "../../components/topBar/TopBar.jsx";
import './mainLayouts.css'

const MainLayout = () => {
    return (
        <div className='app'>
            <LeftBar />
            <div className='content'>
                <TopBar />
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout
