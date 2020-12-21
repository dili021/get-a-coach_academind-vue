export default {
  REGISTER_COACH(state, payload) {
    state.coaches.push(payload);
  },
  SET_COACHES(state, payload) {
    state.coaches = payload;
  },
  SET_FETCH_TIMESTAMP(state) {
    state.lastFetch = new Date().getTime();
  }
};
