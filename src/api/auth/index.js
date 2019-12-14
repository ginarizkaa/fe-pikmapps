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
            .post('/account', {
                nama: data.nama,
                password: "password",
                notelp: data.notelp,
                email: data.email,
                alamat: data.alamat,
                kodepos: data.kodepos,
                sekolah: data.sekolah,
                tingkat: data.tingkat,
                kelas: data.kelas,
                point: 0,
                beA: data.beA,
                toSay: data.toSay
            })
                .then(function(response) {
                    return response.data;
            })
            .catch(function(err) {
                console.log(err);
            })
        }
}