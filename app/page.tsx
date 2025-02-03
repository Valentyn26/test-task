"use client";

import { useState } from "react";
import AddUserModal from "./components/Modals/AddUserModal";
import Button from "./components/UI/Button/Button";
import TrashButton from "./components/UI/Button/TrashButton";
import Dropdown from "./components/UI/Dropdown/Dropdown";
import UserList from "./components/UserList/UserList";
import "./userPage.css";

export default function Users() {

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  function handleModalOpen() {
    setIsModalOpened(true)
  }

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
            </Dropdown>
            <Dropdown title="Select country" width="220px">
            </Dropdown>
            <Dropdown title="All Statuses" width="220px">
            </Dropdown>
            <TrashButton />
            <div className="filter__addButton">
              <Button onClick={handleModalOpen} type="button" width="150px">Add User</Button>
            </div>
          </div>
          <UserList />
        </section>
      </div>
      <AddUserModal isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
    </main>
  );
}
