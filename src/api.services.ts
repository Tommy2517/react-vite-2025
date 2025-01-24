// const baseUrl = import.meta.env.VITE_REQRES_API_URL

export const getAll = async <T>(url:string,params: string): Promise<T> => {
    return await fetch(url + params)
        .then(res => res.json())
}