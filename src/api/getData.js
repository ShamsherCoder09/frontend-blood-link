import axios from 'axios'

export async function getOrganizations(data){
    try {
        const res = await axios.post('http://localhost:9000/api/getOrganizations',data);
        return res.data;
    } catch (error) {
        return error;
    }

}
export async function updateAvailable(data){
    try {
        const res = await axios.post('http://localhost:9000/api/updateAvailable',data);
        return res.data;
    } catch (error) {
        return error;
    }
}
export async function getAvailableBlood(data) {
    try {
        const res = await axios.post('http://localhost:9000/api/getAvailableBlood', {data});
        return res.data;
    } catch (error) {
        return error;
    }
}