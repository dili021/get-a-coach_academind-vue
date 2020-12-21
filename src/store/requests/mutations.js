export default {
  ADD_REQUEST(state, payload) {
    state.requests.push(payload);
  },
  SET_REQUESTS(state, payload) {
    state.requests = payload;
  }
};
