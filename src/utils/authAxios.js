import Axios from 'axios';

const authAxios = () => {
    const token = localStorage.getItem('token');

    return Axios.create({
        baseURL: 'https://easydoseit.herokuapp.com/api/auth',
        headers: {
            Authorization: token
        }
    })
}

export default authAxios;