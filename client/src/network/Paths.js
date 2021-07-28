const BASE_DOMAIN = 'http://localhost:3000';

const getUsers = () => {
    return `${BASE_DOMAIN}/users`;
}

const getItems = () => {
    return `${BASE_DOMAIN}/users/items`;
}

const getItemLookupPath = () => {
    return `${BASE_DOMAIN}/users/age`;
}

const allPaths = {
    getUsers,
    getItems,
    getItemLookupPath
}
export default allPaths;