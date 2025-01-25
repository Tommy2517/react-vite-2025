
export interface IUsers {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: UsersHair;
    ip: string;
    address: UsersAddress;
    macAddress: string;
    university: string;
    bank: UsersBank;
    company: UsersCompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: UsersCrypto;
    role: string;
}


export interface UsersHair {
    color: string;
    type: string;
}
export interface UsersAddressCoordinates {
    lat: number;
    lng: number;
}
export interface UsersAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: UsersAddressCoordinates;
    country: string;
}
export interface UsersBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
export interface UsersCompanyAddressCoordinates {
    lat: number;
    lng: number;
}
export interface UsersCompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: UsersCompanyAddressCoordinates;
    country: string;
}
export interface UsersCompany {
    department: string;
    name: string;
    title: string;
    address: UsersCompanyAddress;
}
export interface UsersCrypto {
    coin: string;
    wallet: string;
    network: string;
}