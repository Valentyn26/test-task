import "./editPage.css";

import Button from "../components/UI/Button/Button";
import Dropdown from "../components/UI/Dropdown/Dropdown";

export default function EditUserPage() {
    return (
        <main className="main">
            <div className="main__container">
                <h1 className="main__title">edit user</h1>
                <section className="user">
                    <label className="user__name">
                        User
                        <Dropdown title="Select user" width="500px"></Dropdown>
                    </label>
                    <form className="user__edit edit">
                        <h2 className="edit__title">User Information</h2>
                        <div className="edit__fields">
                            <label className="edit__name">
                                Full Name
                                <Dropdown title="Select user" width="500px"></Dropdown>
                            </label>
                            <label className="edit__department">
                                Department
                                <Dropdown title="Select user" width="500px"></Dropdown>
                            </label>
                            <label className="edit__country">
                                Country
                                <Dropdown title="Select user" width="500px"></Dropdown>
                            </label>
                            <label className="edit__status">
                                Status
                                <Dropdown title="Select user" width="500px"></Dropdown>
                            </label>
                        </div>
                        <div className="edit__buttons">
                            <Button type="reset" width="100px">Undo</Button>
                            <Button type="submit" width="200px">Save</Button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}