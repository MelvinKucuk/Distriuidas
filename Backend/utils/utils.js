 class Utils {
    static getUrlByKey () {
        const API_URL ="http://www.omdbapi.com/?apikey=";
        const API_KEY="d0b64143";
        const endpoint = `${API_URL}${API_KEY}`;
        return endpoint;
    }
}

module.exports = Utils;