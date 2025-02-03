import { ReactNode, useEffect } from "react";
import styles from "./AddUserModal.module.css";
import Dropdown from "../UI/Dropdown/Dropdown";
import Button from "../UI/Button/Button";

type AddUserModalProps = {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddUserModal({ isOpened, setIsOpened }: AddUserModalProps) {

    useEffect(() => {
        if (isOpened) {
            setIsOpened(true);
            window.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsOpened(false), 300);
            return () => {
                clearTimeout(timer);
                window.removeEventListener('keydown', handleKeyDown);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape' && isOpened) {
                setIsOpened(false);
            }
        }
    }, [isOpened, setIsOpened]);


    function handleClickOut(
        event: React.PointerEvent<HTMLDivElement>
    ): void {
        event.stopPropagation();
        const startClickOn = event.target;

        const outOfModalArea = event.currentTarget;
        outOfModalArea.onpointerup = event => {
            const endClickOn = event.target;
            outOfModalArea.onpointerup = null;
            if (startClickOn !== event.currentTarget || endClickOn !== event.currentTarget) return;
            setIsOpened(false);
        }
    }

    if (!isOpened) return null;

    return (
        <div onPointerDown={handleClickOut} className={styles.modal}>
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