import './app.css'
import LeftBar from "./components/LeftBar/LeftBar.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import Gallery from "./components/gallery/Gallery.jsx";

const App = () => {
  return (

    <div className='app'>
        <LeftBar />
        <div className='content'>
            <TopBar />
            <Gallery />

        </div>
    </div>
  )
}

export default App