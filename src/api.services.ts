const baseUrl = import.meta.env.VITE_REQRES_API_URL

export const getAll = async <T>(params: string): Promise<T> => {
    return await fetch(baseUrl + params)
        .then(res => res.json())
}