import axios from "axios";

const instance = axios.create({
    baseURL:' http://localhost:5001/jaimalaxmitraders-ddd14/us-central1/api' 
    //the API (cloud function )URl
});
export default instance;