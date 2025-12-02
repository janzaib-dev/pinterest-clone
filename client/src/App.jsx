import './app.css'
import LeftBar from "./components/LeftBar/LeftBar.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import {Outlet} from "react-router";

const App = () => {
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

export default App