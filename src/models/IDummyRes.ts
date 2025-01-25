import {IUser} from "./IUser.ts";

export interface IDummyRes {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
}