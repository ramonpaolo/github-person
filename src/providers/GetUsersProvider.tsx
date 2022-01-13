import React, { createContext, useContext, useEffect, useState } from "react";
import { JsxElement } from "typescript";

// ---- Interfaces
import IUser from "../interfaces/user";

interface IUsersProvider {
    users: IUser[];
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const DEFAULT_VALUE: IUsersProvider = {
    setUsers: () => {
        return;
    },
    users: [
        {
            avatar_url: "",
            bio: "",
            html_url: "",
            login: "",
            name: "",
            repos_url: "",
            repos_urls: [],
        },
    ],
};

export const UsersContext = createContext<IUsersProvider>(DEFAULT_VALUE);

export const UsersProvider = ({
    children,
}: {
    children: JsxElement | JsxElement[];
}) => {
    const [users, setUsers] = useState<IUser[]>(DEFAULT_VALUE.users);

    useEffect(() => {
        const fetchData = async () => {
            //fazer ainda
            const response = await fetch(
                "https://api.github.com/users/ramonpaolo"
            );
            setUsers(await response.json());
            return;
        };
        fetchData();
    }, []);

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => useContext(UsersContext);
