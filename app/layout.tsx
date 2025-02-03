import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { StatusProvider } from "./context/statusContext";
import { DepartmentProvider } from "./context/departmentContext";
import { CountryProvider } from "./context/countryContext";
import { UserProvider } from "./store/UserProvider";

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
        <StatusProvider>
          <DepartmentProvider>
            <CountryProvider>
              <UserProvider>
                <Header />
                {children}
              </UserProvider>
            </CountryProvider>
          </DepartmentProvider>
        </StatusProvider>
      </body>
    </html>
  );
}
