import React, { createContext, useContext, ReactNode } from "react";

type Status = {
    name: string;
    value: string;
};

type StatusContextType = {
    statuses: Status[];
};

export const StatusContext = createContext<StatusContextType | undefined>(undefined);

type StatusProviderProps = {
    children: ReactNode;
};

export const StatusProvider = ({ children }: StatusProviderProps) => {
    const statuses: Status[] = [
        {
            name: "All statuses",
            value: "ALL",
        },
        {
            name: "Active",
            value: "ACTIVE",
        },
        {
            name: "Disabled",
            value: "DISABLED",
        },
    ];

    return (
        <StatusContext.Provider value={{ statuses }}>
            {children}
        </StatusContext.Provider>
    );
};