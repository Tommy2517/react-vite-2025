const limit = 30
export const skipUtil = (query): string => {
    const limit = 30;
    return '?skip=' + (limit * (+query) - limit)
}
export const totalPagesUtil = (listLang):number => {
    return Math.ceil(listLang / limit);
}