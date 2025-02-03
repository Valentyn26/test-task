import TrashButton from "../UI/Button/TrashButton";
import styles from "./UserList.module.css";

export default function UserList() {
    return (
        <div className={styles.table}>
            <div className={styles.table__header}>
                <div>Full Name</div>
                <div>Department</div>
                <div>Country</div>
                <div>Status</div>
                <div></div>
            </div>

            <div className={styles.table__body}>
                <div className={styles.table__row}>
                    <div>Andrey Olishchuck</div>
                    <div>Digital marketing</div>
                    <div>Ukraine</div>
                    <div>Active</div>
                    <div><TrashButton /></div>
                </div>
                <div className={styles.table__row}>
                    <div>Andrey Olishchuck</div>
                    <div>Digital marketing</div>
                    <div>Ukraine</div>
                    <div>Active</div>
                    <div><TrashButton /></div>
                </div>
            </div>
        </div>
    )
}