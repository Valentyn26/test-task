import { ReactNode } from "react";
import styles from "./AddUserModal.module.css";
import Dropdown from "../UI/Dropdown/Dropdown";
import Button from "../UI/Button/Button";

type AddUserModalProps = {

}

export default function AddUserModal({ }: AddUserModalProps) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__box}>
                <h2 className={styles.modal__title}>add user</h2>
                <form className={styles.modal__form}>
                    <div className={styles.modal__fields}>
                        <label>
                            Full Name
                            <Dropdown title="Select user" width="280px"></Dropdown>
                        </label>
                        <label>
                            Department
                            <Dropdown title="Select user" width="280px"></Dropdown>
                        </label>
                        <label>
                            Country
                            <Dropdown title="Select user" width="280px"></Dropdown>
                        </label>
                        <label>
                            Status
                            <Dropdown title="Select user" width="280px"></Dropdown>
                        </label>
                    </div>
                    <div className={styles.modal__buttons}>
                        <Button type="reset" width="100px">Cansel</Button>
                        <Button type="submit" width="200px">Add</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}