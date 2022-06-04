import styles from "../styles/Footer.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className={styles.foot}>
            <div className={styles.title}>
                <h2>InfiniteSupport4Paws</h2>
                <p>Copyright <span>©</span> 2022 Infinite Support 4 Paws</p>
            </div>

            <div className={styles.socialContainer}>
                <div className={styles.socialLinks}>
                    <a href="https://www.facebook.com/Infinite-Support-4Paws-102356961309518/"
                       target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/infinitesupport4paws/"
                       target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}