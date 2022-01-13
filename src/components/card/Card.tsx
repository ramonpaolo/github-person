import React from "react";

// ---- Interfaces
import IRepo from "../../interfaces/repo";
import IUser from "../../interfaces/user";

export default function Card({ user, repo }: { user: IUser; repo: IRepo }) {
    return (
        <div className="card__user">
            <h1>{user.name}</h1>
            <div className="card__repo__user">
                <p>{repo.full_name}</p>
            </div>
            {/* <h1>{repo.name}</h1> */}
        </div>
    );
}
