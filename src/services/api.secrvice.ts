const baseUrl = import.meta.env.VITE_URL_DUMMY

export const getAll = async <T>(urls:string, params:string): Promise<T> => {
    return await fetch(urls+params)
        .then(res => res.json())
}