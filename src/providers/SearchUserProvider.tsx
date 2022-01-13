import React, { useContext, createContext, useEffect, useState } from "react";

import IRepo from "../interfaces/repo";
import IUser from "../interfaces/user";

interface ISearchUserProvider {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const DEFAULT_VALUE: ISearchUserProvider = {
    setUser: () => {
        return;
    },
    user: {
        avatar_url: "",
        bio: "",
        html_url: "",
        login: "",
        name: "",
        repos_url: "",
        repos_urls: [
            {
                created_at: Date.now().toString(),
                full_name: "",
                description: "",
                html_url: "",
                language: "",
                languages_url: [],
                license: {
                    key: "",
                    name: "",
                    node_id: "",
                    spdx_id: "",
                    url: "",
                },
                name: "",
                stargazers_count: 0,
                topics: [],
                updated_at: "",
            },
        ],
    },
};

export const SearchUserContext =
    createContext<ISearchUserProvider>(DEFAULT_VALUE);

export const SearchUserProvider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [user, setUser] = useState<IUser>(DEFAULT_VALUE.user);
    // const [repo, setRepo] = useState<IRepo>(DEFAULT_VALUE.user.repos_urls[0])

    const fetchDataGetRepos = async (repoUrl: string) => {
        const response = await fetch(repoUrl);
        const responseValue = await response.json();
        return await responseValue;
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user.login.toLowerCase()}`
            );
            const responseValue = await response.json();
            const reposUrl = await fetchDataGetRepos(
                responseValue["repos_url"]
            );
            responseValue["repos_urls"] = reposUrl;
            setUser(responseValue);
            return;
        };
        if (user.login !== "") fetchData();
    }, [user.login]);

    return (
        <SearchUserContext.Provider value={{ user, setUser }}>
            {children}
        </SearchUserContext.Provider>
    );
};

export const useSearchUser = () => useContext(SearchUserContext);
