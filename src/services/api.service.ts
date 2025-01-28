import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
// это тип объекта который отправляем в теле запроса на логин юзера
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}

//это запрос с базовой урл
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

// эта функция исполняется во время отправки запроса на сервер
// проверяем объект в запросе, является ли метод запроса ГЕТом
// если условие соответствует добавляем в хедер свойство Autorization и в его значение кладем токен.
// это нужно для того что бы получить данные доступ к которым ограничен авторизацией.
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

// этf функция делает запрос на сервер с целью зайти в свой аккаунт
// арументы это  функции являются объектом с логином и паролем пользователя
// этот объект помещается в тело запроса (body) и после обрабатывается сервером
// если данные верны сервер возвращает объект с данными пользователя + токены (IUserWithTokens)
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

// делаем запрос на сервер с методом гет. так как нетод ГЕТ -
// по пути на сервер срабатывает функция интерцептор и добавляет акцес токен
// в ответ получаем объект с массивом продуктов если токен валидный
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products
}

// токен который мы получаем после логина имеют срок годности.
// после того как акцес токен теряет валидность мы не можем получить данные
// вместо этого сервер возвращает код ошибки 401 токен не валидный
// эту функцию вызываем когда получаем ошибку.
// в ней достаем рефреш токен из нашего хранилища и кладем в тело запроса
// отправив запрос на определенный урл получаем в ответ новую пару токенов
// после чего перезаписываем объект с данными юзера из хранилища, заменяя новые токены
export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}