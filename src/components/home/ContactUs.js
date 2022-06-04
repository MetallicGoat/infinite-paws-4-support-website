import business from "../../images/business.png";
import styles from "../../styles/home/ContactUs.module.css"

export default function ContactUs() {
    return(
        <div className={styles.contact}>
            <div className={styles.contactInfo}>
                <h2>Contact Info</h2>
                <ul>
                    <li>Phone: 905-537-9646</li>
                    <li>Email: is4paws2020@gmail.com</li>
                    <li>Facebook: Infinite Support 4 Paws</li>
                    <li>Instagram: infinitesupport4paws</li>
                </ul>
            </div>

            <div className={styles.businessImage}>
                <img src={business} alt="Business Card"/>
            </div>
        </div>
    );
}