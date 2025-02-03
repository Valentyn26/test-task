import React, { createContext, useContext, ReactNode } from "react";

type Country = {
    name: string;
    value: string;
};

type CountryContextType = {
    countries: Country[];
};

export const CountryContext = createContext<CountryContextType | undefined>(undefined);

type CountryProviderProps = {
    children: ReactNode;
};

export const CountryProvider = ({ children }: CountryProviderProps) => {
    const countries: Country[] = [
        { name: "Ukraine", value: "UA" },
        { name: "United States", value: "US" },
        { name: "Canada", value: "CA" },
        { name: "Germany", value: "DE" },
        { name: "France", value: "FR" },
        { name: "Australia", value: "AU" },
        { name: "Japan", value: "JP" },
        { name: "United Kingdom", value: "GB" },
        { name: "China", value: "CN" },
        { name: "India", value: "IN" },
    ];

    return (
        <CountryContext.Provider value={{ countries }}>
            {children}
        </CountryContext.Provider>
    );
};
