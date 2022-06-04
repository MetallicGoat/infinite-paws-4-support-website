import {Routes, Route, BrowserRouter} from "react-router-dom";
import styles from "./styles/Gobal.module.css"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactUs from "./components/home/ContactUs";
import OurTeam from "./components/home/OurTeam";
import UpcomingEvents from "./components/home/UpcommingEvents";
import OurMission from "./components/home/OurMission";
import ApplyForm from "./components/apply/ApplyForm";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.page}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={
                        <div className={styles.content}>
                            <OurMission/>
                            <UpcomingEvents/>
                            <ContactUs/>
                            <OurTeam/>
                        </div>
                    } />
                    <Route path="gallery" element={
                        <div className={styles.content}>

                        </div>
                    } />
                    <Route path="stories" element={
                        <div className={styles.content}>

                        </div>
                    } />
                    <Route path="apply" element={
                        <div className={styles.content}>
                            <ApplyForm/>
                        </div>
                    } />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */
