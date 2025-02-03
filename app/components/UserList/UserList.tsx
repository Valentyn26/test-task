import { use, useContext } from "react";
import TrashButton from "../UI/Button/TrashButton";
import styles from "./UserList.module.css";
import { UserContext } from "@/app/context/userContext";
import { User } from "@/app/types/types";
import { useDispatch } from "react-redux";

type Filters = {
    country: string[];
    department: string[];
    status: string[];
};

type UserListProps = {
    filteredUsers: User[];
    filters: Filters;
}

export default function UserList({ filteredUsers, filters }: UserListProps) {
    const dispatch = useDispatch();

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
                        <div><TrashButton onClick={() => dispatch({ type: "DELETE_USER", payload: user.id })} /></div>
                    </div>
                )}
            </div>
        </div>
    )
}