import _ from "axios";
export const axios = _.create({
    baseURL: process.env.NEXT_PUBLIC_API_LOCAL_BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "Content-Type",
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': process.env['NEXT_PUBLIC_SITE_URL']
    }

})
axios.interceptors.response.use(function (response) {
    return response.data
})

export const remoteAxios = _.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "Content-Type",
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': process.env['NEXT_PUBLIC_SITE_URL']
    }
})

remoteAxios.interceptors.response.use(function (response) {
    return response.data
})
