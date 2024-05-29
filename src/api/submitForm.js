import axios from "axios"
import { toast } from "react-toastify";

export const submitForm = async (userData,organizationId) => {
    const submitForm = await axios.post('http://localhost:9000/api/bloodNeederForms',{userData,organizationId});
    try {
        if(submitForm){
            return submitForm;
        }
    } catch (error) {
        toast.error("Something Went Wrong !")
    }
}

export const getAllForms = async () => {
    try {
        const response = await axios.get('http://localhost:9000/api/allNeederForms');
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to get all forms');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Something went wrong while getting all forms');
    }
};