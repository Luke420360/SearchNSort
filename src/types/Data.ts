// Type for the data of the api https://api.publicapis.org/

type Data = {
    API: string,
    Title: string,
    Description: string,
    Auth: string,
    HTTPS: boolean,
    Cors: string,
    Category: string,
    Link: string
}

export type Column = 
    "API" | "Title" 
    | "Description" | "Auth" 
    | "HTTPS" | "Cors" 
    | "Category" | "Link";

export default Data;