import axios from 'axios';

const COMPETITION_API_BASE_URL = 'http://localhost:4000/api/v1/competitions';

class CompetitionService {
    getCompetition() {
        return axios.get(COMPETITION_API_BASE_URL);
    };

    getCompetitionById(id) {
        return axios.get(COMPETITION_API_BASE_URL + '/' + id);
    };
};

export default new CompetitionService();