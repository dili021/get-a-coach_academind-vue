import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import coaches from './coaches';
export default {
  namespaced: true,
  state() {
    return {
      coaches
    };
  },
  mutations,
  actions,
  getters
};
