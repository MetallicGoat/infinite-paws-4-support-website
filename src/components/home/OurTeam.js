import headPlaceholder from "../../images/head-placeholder.png";
import styles from "../../styles/home/OurTeam.module.css"

export default function OurTeam() {
    return (

        <div className={styles.ourTeam}>

            <h2>Our Team</h2>

            <div className={styles.people}>
                <TeamMember/>
                <TeamMember/>
                <TeamMember/>
            </div>

        </div>
    );
}

function TeamMember() {
    return(
        <div className={styles.person}>
            <img src={headPlaceholder} alt="Name3"/>
            <h3>Name3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
        </div>
    );
}