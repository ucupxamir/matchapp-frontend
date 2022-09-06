import axios from 'axios';

const REGISTER_API_BASE_URL = 'http://localhost:4000/api/v1/register';

class RegisterService {
    register(competition) {
        return axios.post(REGISTER_API_BASE_URL, competition);
    };
};

export default new RegisterService();