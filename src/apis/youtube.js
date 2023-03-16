import axios from 'axios';

const KEY = 'AIzaSyDeEejSYHIL0_MHUxx2EhxkODbQpvqHTlo'

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});