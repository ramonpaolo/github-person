import React, { useEffect } from "react";

// ---- Interfaces
import IRepo from "../../interfaces/repo";

// ---- Styles
import "./repos.css";

// ---- Datas
import dataImage from "../../data/data-image.json";

export default function Repo({
    repo,
    isSelected,
}: {
    repo: IRepo;
    isSelected: boolean;
}) {
    useEffect(() => {
        for (let x = 0; x < dataImage.data.length; x++) {
            if (dataImage.data[x].language == repo.language) {
                document
                    .getElementById(repo.updated_at)
                    ?.setAttribute(
                        "style",
                        "background-image: url('" + dataImage.data[x].img + "')"
                    );
            }
        }
    }, []);

    return (
        <div
            className="field__repos"
            id={isSelected ? "selected" : ""}
            style={{
                backgroundColor: isSelected ? "#FF6464" : "#FFA0A0",
                transform: isSelected ? "scale(1.05)" : "",
                transitionDuration: "0.3s",
            }}
        >
            <h1>
                <a href={repo.html_url}>/{repo.full_name.split("/")[1]}</a>
            </h1>
            <div className="language">
                <p>Most Used Lenguage: </p>
                <span>{repo.language}</span>
                <div className="elipse__language" id={repo.updated_at}></div>
            </div>
        </div>
    );
}
