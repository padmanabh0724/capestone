import axios from "axios";

const EXCHANGE_API_BASE_URL="http://localhost:8093/exchange/api/v1/"

class LoginServices{

    getCustodianByPassword(password){
        return axios.get(EXCHANGE_API_BASE_URL,password);
    }
    
}

export default new LoginServices();