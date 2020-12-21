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
  },
  shouldUpdate(state) {
    if (!state.lastFetch) return true;

    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - state.lastFetch) / 1000 > 60;
  }
};
