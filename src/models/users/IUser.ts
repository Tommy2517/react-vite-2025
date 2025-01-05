export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IUserAddress;
	phone: string;
	website: string;
	company: IUserCompany;
}
interface IUserAddressGeo {
	lat: string;
	lng: string;
}
interface IUserAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IUserAddressGeo;
}
interface IUserCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}