import {IUser} from "./IUser.ts";

export interface IReqResData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: IUserSupport;
}
export interface IUserSupport {
    url: string;
    text: string;
}