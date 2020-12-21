export default {
  registerCoach(ctx, data) {
    const coach = {
      id: ctx.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    ctx.commit('REGISTER_COACH', coach);
  }
};
