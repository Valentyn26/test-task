"use client";

import { useContext, useEffect, useState } from "react";
import AddUserModal from "./components/Modals/AddUserModal";
import Button from "./components/UI/Button/Button";
import TrashButton from "./components/UI/Button/TrashButton";
import Dropdown from "./components/UI/Dropdown/Dropdown";
import UserList from "./components/UserList/UserList";
import "./userPage.css";
import { DepartmentContext } from "./context/departmentContext";
import Option from "./components/UI/Dropdown/Option";
import { CountryContext } from "./context/countryContext";
import { StatusContext } from "./context/statusContext";
import { UserContext } from "./context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export default function Users() {

  const depContext = useContext(DepartmentContext);
  const departments = depContext ? depContext.departments : [];

  const countyContext = useContext(CountryContext);
  const countries = countyContext ? countyContext?.countries : [];

  const statusContext = useContext(StatusContext);
  const statuses = statusContext ? statusContext.statuses : [];


  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  function handleModalOpen() {
    setIsModalOpened(true)
  }

  type Filters = {
    country: string[];
    department: string[];
    status: string[];
  };

  type Department = {
    name: string;
    value: string;
  };

  const [filters, setFilters] = useState<Filters>({
    country: [],
    department: [],
    status: []
  });


  function setDep(dep: Department) {
    if (filters.department.includes(dep.value)) {
      setFilters({
        ...filters, department: filters.department.filter(d => d !== dep.value)
      });
    } else {
      setFilters({ ...filters, department: [...filters.department, dep.value] });
    }
  }

  function setCountry(c: Department) {
    if (filters.country.includes(c.value)) {
      setFilters({
        ...filters, country: filters.country.filter(co => co !== c.value)
      });
    } else {
      setFilters({ ...filters, country: [...filters.country, c.value] });
    }
  }

  function setStatus(s: Department) {
    if (filters.status.includes(s.value)) {
      setFilters({
        ...filters, status: filters.status.filter(st => st !== s.value)
      });
    } else {
      setFilters({ ...filters, status: [...filters.status, s.value] });
    }
  }

  const users = useSelector((state: RootState) => state.users.users)
  const filteredUsers = useSelector((state: RootState) => state.users.filteredUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users) {
      dispatch({ type: "FILTER_USER", payload: filters });
    }
  }, [filters, users]);

  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">users</h1>
        <section className="filter">
          <p className="filter__hint">
            Please add at least 3 departmetns to be able to proceed next steps.
          </p>
          <div className="filter__body">
            <Dropdown title="Select departments" width="220px">
              {departments.map(dep =>
                <Option key={dep.value} setFilters={() => setDep(dep)}>{dep.name}</Option>
              )}
            </Dropdown>
            <Dropdown title="Select country" width="220px">
              {countries.map(c =>
                <Option key={c.value} setFilters={() => setCountry(c)}>{c.name}</Option>
              )}
            </Dropdown>
            <Dropdown title="All Statuses" width="220px">
              {statuses.map(s =>
                <Option key={s.value} setFilters={() => setStatus(s)}>{s.name}</Option>
              )}
            </Dropdown>
            <TrashButton />
            <div className="filter__addButton">
              <Button onClick={handleModalOpen} type="button" width="150px">Add User</Button>
            </div>
          </div>
          <UserList filteredUsers={filteredUsers} filters={filters} />
        </section>
      </div>
      <AddUserModal isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
    </main>
  );
}
