

import { AddUser, User } from "../types/types";

type Filters = {
    country: string[];
    department: string[];
    status: string[];
};

type UsersState = {
    users: User[];
    filteredUsers: User[];
    id: number;
};

const initialState: UsersState = {
    users: [
        {
            id: 1,
            name: "John Doe",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Information Technology", value: "IT" },
            country: { name: "United States", value: "US" },
        },
        {
            id: 2,
            name: "Jane Smith",
            status: { name: "Disabled", value: "DISABLED" },
            department: { name: "Finance", value: "FIN" },
            country: { name: "Canada", value: "CA" },
        },
        {
            id: 3,
            name: "Alice Johnson",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Marketing", value: "MKT" },
            country: { name: "United Kingdom", value: "GB" },
        },
        {
            id: 4,
            name: "Bob Brown",
            status: { name: "All statuses", value: "ALL" },
            department: { name: "Sales", value: "SAL" },
            country: { name: "Australia", value: "AU" },
        },
        {
            id: 5,
            name: "Charlie Davis",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Customer Support", value: "CS" },
            country: { name: "Germany", value: "DE" },
        },
        {
            id: 6,
            name: "Eve Wilson",
            status: { name: "Disabled", value: "DISABLED" },
            department: { name: "Human Resources", value: "HR" },
            country: { name: "France", value: "FR" },
        },
        {
            id: 7,
            name: "Frank Moore",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Operations", value: "OPS" },
            country: { name: "India", value: "IN" },
        },
        {
            id: 8,
            name: "Grace Lee",
            status: { name: "All statuses", value: "ALL" },
            department: { name: "Legal", value: "LEG" },
            country: { name: "China", value: "CN" },
        },
        {
            id: 9,
            name: "Henry White",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Product Management", value: "PM" },
            country: { name: "Japan", value: "JP" },
        },
        {
            id: 10,
            name: "Isabella Green",
            status: { name: "Disabled", value: "DISABLED" },
            department: { name: "Research and Development", value: "R&D" },
            country: { name: "Ukraine", value: "UA" },
        },
        {
            id: 11,
            name: "Jack Black",
            status: { name: "Active", value: "ACTIVE" },
            department: { name: "Sales", value: "SAL" },
            country: { name: "Australia", value: "AU" },
        },
        {
            id: 12,
            name: "Lily Scott",
            status: { name: "All statuses", value: "ALL" },
            department: { name: "Information Technology", value: "IT" },
            country: { name: "Canada", value: "CA" },
        },
    ],
    filteredUsers: [],
    id: 13
};

type AddAction = { type: "ADD_USER"; payload: AddUser };
type DeleteAction = { type: "DELETE_USER"; payload: number };
type FilterAction = { type: "FILTER_USER"; payload: Filters };

type Action = AddAction | DeleteAction | FilterAction;

const userReducer = (state = initialState, action: Action): UsersState => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, { ...action.payload, id: state.id }],
                id: state.id + 1
            };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        case "FILTER_USER":
            const { country, department, status } = action.payload;
            const filteredUsers = state.users.filter(user => {
                const matchesCountry = country.length ? country.includes(user.country.value) : true;
                const matchesDepartment = department.length ? department.includes(user.department.value) : true;
                const matchesStatus = status.length ? status.includes(user.status.value) : true;
                return matchesCountry && matchesDepartment && matchesStatus;
            });

            return {
                ...state,
                filteredUsers
            };
        default:
            return state;
    }
};

export default userReducer;
