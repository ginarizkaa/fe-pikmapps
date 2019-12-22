import { getApiNoAuth } from '../utils.js'

export default {

    getDataModuls(window) {
    return getApiNoAuth()
        .get('/modul')
            .then(function(response) {
                return response.data;
        })
        .catch(function(err) {
            console.log(err);
        })
    },

    
}