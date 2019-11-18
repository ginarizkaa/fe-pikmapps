import { getApiNoAuth } from '../utils.js'

export default {

    loginUser(window, credentials) {

    return getApiNoAuth()
        .post('/Users/login', credentials)
            .then(function(response) {
                return response.data;
        })
        .catch(function(err) {
            console.log(err);
        })
    },

    registerUser(window, data) {

        return getApiNoAuth()
            .post('/Users', data)
                .then(function(response) {
                    return response.data;
            })
            .catch(function(err) {
                console.log(err);
            })
        }
}