'use strict';
import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '142de37380a46ae';
const ROOT_URL = 'https://api.imgur.com';

// /oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    fetchImages(access_token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: { 
                Authorization: `Bearer ${access_token}`,
            }
        });
    },
    uploadImages(images, access_token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
            });
        });

        return Promise.all(promises);
    },
}