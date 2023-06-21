const TABLE_ID = import.meta.env.VITE_TABLE_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

export const DATABASE_URL = `https://api.tablebackend.com/v1/rows/${TABLE_ID}?api_key=${API_KEY}`;
