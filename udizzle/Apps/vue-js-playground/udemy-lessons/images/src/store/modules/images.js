import api from '../../api/imgur';

const state = {
    images: [],
};

const getters = {
    allImages: state => state.images,
};

const mutations = {
    setImages : (state, images) => {
        state.images = images;
    },
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const {token} = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages({rootState}, images) {
        console.log(images);
        // Get access token
        const { token } = rootState.auth;


        // Call API to upload all files
        await api.uploadImages(images, token);


        // Redirect to Image List Component
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
}