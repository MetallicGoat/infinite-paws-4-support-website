import styles from "../../styles/home/UpcommingEvents.module.css"

export default function UpcomingEvents() {
    return (
        <div>
            <h2 className={styles.title}>Upcoming Events</h2>
            <div className={styles.events}>
                <BuildEvent monthDay="7" day="Mon" month="Mar" eventName="Resque some puppies from some country"/>
                <BuildEvent monthDay="8" day="Tues" month="Mar" eventName="Our Birthday"/>
                <BuildEvent monthDay="9" day="Wed" month="Mar" eventName="Super cool fundraiser"/>
            </div>
        </div>
    );
}

function BuildEvent(props) {
    return (
        <div className={styles.event}>
            <div className={styles.eventDate}>
                <h1>{props.monthDay}</h1>
                <div className={styles.eventMiniDate}>
                    <h4>{props.day}</h4>
                    <h4>{props.month}</h4>
                </div>
            </div>
            <div className={styles.eventName}>
                <p>{props.eventName}</p>
            </div>
        </div>
    );
}