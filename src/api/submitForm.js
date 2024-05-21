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