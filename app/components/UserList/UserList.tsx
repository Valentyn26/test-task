import { use, useContext } from "react";
import TrashButton from "../UI/Button/TrashButton";
import styles from "./UserList.module.css";
import { UserContext } from "@/app/context/userContext";
import { User } from "@/app/types/types";

type UserListProps = {
    filteredUsers: User[];
}

export default function UserList({ filteredUsers }: UserListProps) {
    const context = useContext(UserContext);

    if (!context) {
        return <div>Loading...</div>;
    }

    const { deleteUser } = context;

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
                {filteredUsers.map(user =>
                    <div key={user.id} className={styles.table__row}>
                        <div>{user.name}</div>
                        <div>{user.department.name}</div>
                        <div>{user.country.name}</div>
                        <div>{user.status.name}</div>
                        <div><TrashButton onClick={() => deleteUser(user.id)} /></div>
                    </div>
                )}
            </div>
        </div>
    )
}