'use strict';
import qs from 'qs';
import api from '../../api/imgur';
import {router} from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token'),

};

const getters = {
    /*
     * Returns `true` if user is currently logged in
     * otherwise returns `false`.
    */
    isLoggendIn: state => !!state.token,
};

const actions = {

   finalizeLogin: ({ commit }, hash) => {
        const receivedParams = qs.parse(hash.replace('#', ''));

        commit('setToken', receivedParams.access_token);
        window.localStorage.setItem('imgur_token', receivedParams.access_token);
        router.push('/');
    },

    /*
     * Used for Logging into imgur, using their
     * OAuth service to login and get a token.
    */
   login: () => {
        api.login();
    },

    /*
     * Sets the OAuth token to `null`.
    */
    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },
};

const mutations = {
    /*
     * Sets the OAuth token during login action,
     * and as `null` during logout action.
    */
    setToken(state, token = null) {
        state.token = token;
    },
};


export default {
    state,
    getters,
    actions,
    mutations,
}