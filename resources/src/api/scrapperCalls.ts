import axios from "axios";

const config = {
    method: "get",
    baseURL: "http://127.0.0.1:8000",
    headers: { Accept: "application/json" },
};

async function getStudentSchedule(link: string) {
    axios.request(config);
    try {
        const response = await axios.get("/scraper", {
            params: { link: link },
            responseType: "json",
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export { getStudentSchedule };
