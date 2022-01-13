import React from "react";

// ---- Styles
import "./users.css";

// ---- Components
import Card from "../../components/card/Card";

// ---- Providers
import { useUsers } from "../../providers/GetUsersProvider";

export default function Users() {
    const { users } = useUsers();

    return (
        <div id="page__users">
            <h1>Users</h1>
            {/* {users.map((user) => {
            return <Card repo={user.repos_urls[0]} user={user} key={user.login}/>
        })} */}
        </div>
    );
}
