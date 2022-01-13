import IRepo from "./repo";

export default interface IUser {
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string;
    repos_url: string;
    repos_urls: IRepo[];
}
