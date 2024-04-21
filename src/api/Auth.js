import axios from 'axios';

export async function SignupMutation(data) {
    try {
        const res = await axios.post('http://localhost:9000/api/addUser', data)
        return res;
        
    } catch (error) {
        return error
    }
}

export async function loginMutation(data){
    try {
        const res = await axios.post('http://localhost:9000/api/loginUser', data)
        return res;
        
    } catch (error) {
        return error
    }
}
