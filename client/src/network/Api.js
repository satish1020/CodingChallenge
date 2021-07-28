import axios from 'axios';

const API = {
    getDefaultHeaders: () => {
        const defaultHeaders = { 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
        };
        return defaultHeaders;
    },
    get: (routeUrl, headers) => {
        return new Promise((resolve, reject) => {
            API.prepareConfig(routeUrl, null, 'get', headers, (data, error) => {
                if(error){
                    reject(error);
                }
                resolve(data);
            })
        })
    },
    post: (routeUrl, data, headers) => {
        return new Promise((resolve, reject) => {
            API.prepareConfig(routeUrl, data, 'post', headers, (data, error) => {
                if(error){
                    reject(error);
                }
                resolve(data);
            })
        })
    },
    prepareConfig: async(url, data, method, headers, callback) => {
        const config = {
            method,
            url,
            data,
            headers: headers || API.getDefaultHeaders(),
        }
        axios(config).then(response => {
            callback(response, null)
        }).catch(error => {
            callback(null, error)
        });
    }
}

export default API;