import { ReactNode, useState } from "react";
import styles from "./Option.module.css";

import check from "../../../assets/icons/check.svg"

type Filters = {
    country: string[];
    department: string[];
    status: string[];
};

type OptionProps = {
    setFilters: () => void;
    children?: ReactNode;
}

export default function Option({ setFilters, children }: OptionProps) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setFilters();
    };

    return (
        <label className={`${styles.option} ${checked ? styles.checked : ""}`}>
            <div className={styles.checkButton}>
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.265 0.765L4.26502 8.765C4.1947 8.83523 4.09939 8.87467 4.00002 8.87467C3.90064 8.87467 3.80533 8.83523 3.73502 8.765L0.235015 5.265C0.168775 5.19391 0.132713 5.09989 0.134427 5.00274C0.136141 4.90559 0.175497 4.8129 0.244204 4.74419C0.31291 4.67548 0.405603 4.63613 0.502754 4.63441C0.599904 4.6327 0.693927 4.66876 0.765015 4.735L4.00002 7.96937L11.735 0.235C11.8061 0.16876 11.9001 0.132698 11.9973 0.134412C12.0944 0.136126 12.1871 0.175483 12.2558 0.244189C12.3245 0.312896 12.3639 0.405588 12.3656 0.502739C12.3673 0.599889 12.3313 0.693912 12.265 0.765Z" fill="white" />
                </svg>
            </div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            {children}
        </label>
    )
}