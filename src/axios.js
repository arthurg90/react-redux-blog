import axios from "axios";

export default axios.create({
    baseURL: "http://Arthur.restful.training/api/",
    params: {
        key: "d88418287eea87e740d7a55f4a05d2c7f8bc0cb7",
    },
    headers: {
        Accept: "application/json",
    },
});