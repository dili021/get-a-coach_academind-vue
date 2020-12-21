export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return !!state.coaches;
  },
  isCoach(_, getters, __, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  }
};
