import { createStore } from 'vuex';
import coaches from './coaches/index';
import requests from './requests/index';
const store = createStore({
  state() {
    return {
      userId: 'c3'
    };
  },
  modules: {
    coaches,
    requests
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
