const ENDPOINT = 'https://randomuser.me/api/?results=5';

const fetchList = () => fetch(ENDPOINT).then(response => response.json());

export { fetchList };
