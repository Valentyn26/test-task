import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { UserProvider } from "./context/userContext";
import { StatusProvider } from "./context/statusContext";
import { DepartmentProvider } from "./context/departmentContext";
import { CountryProvider } from "./context/countryContext";

export const metadata: Metadata = {
  title: "Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <StatusProvider>
            <DepartmentProvider>
              <CountryProvider>
                <Header />
                {children}
              </CountryProvider>
            </DepartmentProvider>
          </StatusProvider>
        </UserProvider>
      </body>
    </html>
  );
}
