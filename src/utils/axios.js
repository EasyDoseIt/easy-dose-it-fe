import Axios from 'axios';

export const axiosInstance = () => {
    const token = localStorage.getItem('token')

    return Axios.create({
        baseURL:'https://easydoseit.herokuapp.com/api/',
        headers: {
            "Authorization": token
        }
    })
}

export default axiosInstance;