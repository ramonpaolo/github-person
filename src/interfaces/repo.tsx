export default interface IRepo {
    name: string;
    description: string;
    full_name: string;
    html_url: string;
    languages_url: string[];
    created_at: string;
    updated_at: string;
    stargazers_count: number;
    language: string | null;
    license: ILicense;
    topics: string[];
}

interface ILicense {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}
