"use client";

import React, { createContext, ReactNode } from "react";

type Department = {
    name: string;
    value: string;
};

type DepartmentContextType = {
    departments: Department[];
};

export const DepartmentContext = createContext<DepartmentContextType | undefined>(undefined);

type DepartmentProviderProps = {
    children: ReactNode;
};

export const DepartmentProvider = ({ children }: DepartmentProviderProps) => {
    const departments: Department[] = [
        { name: "Human Resources", value: "HR" },
        { name: "Finance", value: "FIN" },
        { name: "Information Technology", value: "IT" },
        { name: "Marketing", value: "MKT" },
        { name: "Sales", value: "SAL" },
        { name: "Customer Support", value: "CS" },
        { name: "Research and Development", value: "R&D" },
        { name: "Operations", value: "OPS" },
        { name: "Legal", value: "LEG" },
        { name: "Product Management", value: "PM" },
    ];

    return (
        <DepartmentContext.Provider value={{ departments }}>
            {children}
        </DepartmentContext.Provider>
    );
};
