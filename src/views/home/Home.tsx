import React, { useState } from "react";

// ---- Styles
import "./home.css";
// ---- Cpomponents
import Repo from "../../components/repos/Repos";
// ---- Interfaces
import IRepo from "../../interfaces/repo";
// ---- Providers
import { useSearchUser } from "../../providers/SearchUserProvider";

export default function Home() {
    const { user, setUser } = useSearchUser();
    const [nameUser, setNameUser] = useState<string>("");

    const [repoSelected, setRepoSelected] = useState<IRepo | null>(null);

    return (
        <div id="page__search__user">
            {user.avatar_url !== "" ? (
                <img
                    src={user.avatar_url}
                    loading="lazy"
                    alt={`Image ${user.login}`}
                />
            ) : (
                <div className="image__not__load"></div>
            )}
            <form action="#" method="GET">
                <input
                    type="text"
                    placeholder="Search your user here"
                    autoComplete="false"
                    autoCapitalize="false"
                    autoCorrect="false"
                    title="Digite seu nome de usuário do GitHub"
                    onChange={(e) => setNameUser(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        document
                            .getElementById("popup")
                            ?.setAttribute("style", "display: block");
                        e.preventDefault();
                        setUser({
                            login: nameUser,
                            avatar_url: "",
                            bio: "",
                            html_url: "",
                            name: "",
                            repos_url: "",
                            repos_urls: [],
                        });
                    }}
                >
                    Buscar usuário
                </button>
                <div id="popup">
                    <div id="exit__popup"></div>
                    <h1>Oi</h1>
                    <p>asdasd</p>
                    <button>Adicionar</button>
                </div>
                {/* <button style={} disabled>ok</button> */}
            </form>
            {user.name === "" ? (
                ""
            ) : (
                <div id="repos">
                    {user.repos_urls.map((repo) => {
                        return (
                            <div
                                key={repo.created_at}
                                onClick={() => {
                                    setRepoSelected(repo);
                                    console.log(repo);
                                }}
                            >
                                <Repo
                                    isSelected={repoSelected === repo}
                                    repo={repo}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
