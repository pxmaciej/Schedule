import axios from "axios";

const config = {
    baseURL: "http://127.0.0.1:8000",
};

async function getStudentSchedule(link: string) {
    axios.request(config);
    try {
        const response = await axios.post("/scrap", {
            link: link,
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getICal(link: string) {
    axios.request(config);
    try {
        const response = await axios.post("/export", {
            link: link,
            responseType: "blob",
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getURL() {
    return config.baseURL;
}

export { getStudentSchedule, getICal, getURL };
