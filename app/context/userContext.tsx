"use client";

import React, { createContext, useState, ReactNode } from "react";

type Status = {
    name: string;
    value: string;
};

type Department = {
    name: string;
    value: string;
};

type Country = {
    name: string;
    value: string;
};

type User = {
    name: string;
    status: Status;
    department: Department;
    country: Country;
};

type UserContextType = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [users, setUsers] = useState<User[]>([
        {
            name: "John Doe",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Information Technology", value: "IT" },
            country: { name: "United States", value: "US" },
        },
        {
            name: "Jane Smith",
            status: { name: "Disabled", value: "DISABLED" },
            department: { name: "Finance", value: "FIN" },
            country: { name: "Canada", value: "CA" },
        },
        {
            name: "Alice Johnson",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Marketing", value: "MKT" },
            country: { name: "United Kingdom", value: "GB" },
        },
        {
            name: "Bob Brown",
            status: { name: "All statuses", value: "ALL" },
            department: { name: "Sales", value: "SAL" },
            country: { name: "Australia", value: "AU" },
        },
        {
            name: "Charlie Davis",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Customer Support", value: "CS" },
            country: { name: "Germany", value: "DE" },
        },
        {
            name: "Eve Wilson",
            status: { name: "Disabled", value: "DISABLED" },
            department: { name: "Human Resources", value: "HR" },
            country: { name: "France", value: "FR" },
        },
        {
            name: "Frank Moore",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Operations", value: "OPS" },
            country: { name: "India", value: "IN" },
        },
        {
            name: "Grace Lee",
            status: { name: "All statuses", value: "ALL" },
            department: { name: "Legal", value: "LEG" },
            country: { name: "China", value: "CN" },
        },
        {
            name: "Henry White",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Product Management", value: "PM" },
            country: { name: "Japan", value: "JP" },
        },
        {
            name: "Isabella Green",
            status: { name: "Disabled", value: "DISABLED" },
            department: { name: "Research and Development", value: "R&D" },
            country: { name: "Ukraine", value: "UA" },
        },
        {
            name: "Jack Black",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Sales", value: "SAL" },
            country: { name: "Australia", value: "AU" },
        },
        {
            name: "Lily Scott",
            status: { name: "All statuses", value: "ALL" },
            department: { name: "Information Technology", value: "IT" },
            country: { name: "Canada", value: "CA" },
        },
    ]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};