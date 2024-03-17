import axios from 'axios';
export function Login(data) {
    // Code for Query From Backend
}

export async function SignupMutation(data) {
    try {
        const res = await axios.post('http://localhost:9000/api/addUser', data)
        return res;
        
    } catch (error) {
        return error
    }
}
