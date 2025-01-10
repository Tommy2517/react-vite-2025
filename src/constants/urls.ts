export const urls = {
    users: {
        allUsers: import.meta.env.VITE_API_URL_PLACEHOLDER + '/users',
        byId: (id: number) => {
            return import.meta.env.VITE_API_URL_PLACEHOLDER + '/' + id
        }
    }
}
console.log(urls.users.allUsers)