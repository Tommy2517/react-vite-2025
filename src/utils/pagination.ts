export const calculateSkip = (page: number, limit: number): number => {
    return (page - 1) * limit;
};

export const calculateTotalPages = (totalItems: number, limit: number): number => {
    return Math.ceil(totalItems / limit);
};