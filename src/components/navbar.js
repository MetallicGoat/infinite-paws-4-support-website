import styles from "../styles/Navbar.module.css"
import logo from "../images/logo.png";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.navbar}>

            <div>
                <Link to="/"><img src={logo} alt="Logo"/></Link>
            </div>

            <div className={styles.buttons}>
                <div className={styles.pageLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/stories">Stories</Link>
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;