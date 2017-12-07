import axios from "axios";

export default axios.create({
    // use your own url
    baseURL: "http://Liz.restful.training/api/",

    // use your own key
    params: {"key": "2cf99110c6346945c9fd71a4adac0b0ba3e85e20"},
    
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});