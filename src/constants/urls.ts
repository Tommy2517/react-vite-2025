const baseUrl = import.meta.env.VITE_API_URL
export const urls = {
    dummyRes:baseUrl,
    users: {
        getAll: () => {
            return baseUrl + '/users'
        }
    }
}