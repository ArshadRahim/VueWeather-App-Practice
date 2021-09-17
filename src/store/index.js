import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    // weather: null,
  },
  mutations: {
    // GET_WEATHER(state, responce) {
    //   state.weather = responce.data;
  },
  actions: {},
  getters: {
    // weather: (state) => state.weather,
  },
});
