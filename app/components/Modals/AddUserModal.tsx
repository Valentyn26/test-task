import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "./AddUserModal.module.css";
import Dropdown from "../UI/Dropdown/Dropdown";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { AddUser } from "@/app/types/types";
import Select from "../UI/Select/Select";
import { DepartmentContext } from "@/app/context/departmentContext";
import { CountryContext } from "@/app/context/countryContext";
import { StatusContext } from "@/app/context/statusContext";
import { useDispatch } from "react-redux";

type AddUserModalProps = {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddUserModal({ isOpened, setIsOpened }: AddUserModalProps) {
    const depContext = useContext(DepartmentContext);
    const departments = depContext ? depContext.departments : [];

    const countyContext = useContext(CountryContext);
    const countries = countyContext ? countyContext?.countries : [];

    const statusContext = useContext(StatusContext);
    const statuses = statusContext ? statusContext.statuses : [];

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

    const [user, setUser] = useState<AddUser>({
        name: "",
        status: { name: "", value: "" },
        department: { name: "", value: "" },
        country: { name: "", value: "" },
    });

    function handleType(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({ ...user, name: e.target.value });
    }

    function handleDep(name: string, value: string) {
        setUser({ ...user, department: { name, value } });
    }

    function handleCountry(name: string, value: string) {
        setUser({ ...user, country: { name, value } });
    }

    function handleStatus(name: string, value: string) {
        setUser({ ...user, status: { name, value } });
    }

    function handleSubmit() {
        dispatch({ type: "ADD_USER", payload: user });
        setIsOpened(false);
        setUser({
            name: "",
            status: { name: "", value: "" },
            department: { name: "", value: "" },
            country: { name: "", value: "" },
        });
    }

    const dispatch = useDispatch();

    if (!isOpened) return null;

    return (
        <div onPointerDown={handleClickOut} className={styles.modal}>
            <div className={styles.modal__box}>
                <h2 className={styles.modal__title}>add user</h2>
                <form className={styles.modal__form}>
                    <div className={styles.modal__fields}>
                        <label>
                            Full Name
                            <Input onChange={handleType} type="text" value={user.name} />
                        </label>
                        <label>
                            Department
                            <Select title={user.department.name} width="280px" zIndex={10}>
                                {departments.map(dep =>
                                    <div onClick={() => handleDep(dep.name, dep.value)} key={dep.value} className={styles.option}>{dep.name}</div>
                                )}
                            </Select>
                        </label>
                        <label>
                            Country
                            <Select title={user.country.name} width="280px" zIndex={1}>
                                {countries.map(c =>
                                    <div onClick={() => handleCountry(c.name, c.value)} key={c.value} className={styles.option}>{c.name}</div>
                                )}
                            </Select>
                        </label>
                        <label>
                            Status
                            <Select title={user.status.name} width="280px" zIndex={1}>
                                {statuses.map(s =>
                                    <div onClick={() => handleStatus(s.name, s.value)} key={s.value} className={styles.option}>{s.name}</div>
                                )}
                            </Select>
                        </label>
                    </div>
                    <div className={styles.modal__buttons}>
                        <Button onClick={() => setIsOpened(false)} type="button" width="100px">Cansel</Button>
                        <Button onClick={handleSubmit} type="button" width="200px">Add</Button>
                    </div>
                </form>
            </div >
        </div >
    )
}