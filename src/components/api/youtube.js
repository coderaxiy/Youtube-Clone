import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:  5,
        key: 'AIzaSyAl1B7gM1IKPA7fddJdtE0rTrf4ZCh_aDw',
        
    }
}) 