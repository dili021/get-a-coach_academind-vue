export default {
  contactCoach(ctx, payload) {
    const req = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message
    };

    ctx.commit('ADD_REQUEST', req);
  }
};
