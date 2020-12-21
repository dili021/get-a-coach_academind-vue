export default {
  getAllRequests(state, _, __, rg) {
    const coachId = rg.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return !!getters.getAllRequests.length;
  }
};
