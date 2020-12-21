export default {
  async fetchRequests(ctx) {
    const coachId = ctx.rootGetters.userId;
    const res = await fetch(
      `https://vue-academind-bb347-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const data = await res.json();
    if (!res.ok) {
      const err = new Error(res.message || 'Something went wrong');
      throw err;
    }
    const requests = [];
    for (let key in data) {
      const request = {
        id: key,
        coachId,
        email: data[key].email,
        message: data[key].message
      };
      requests.push(request);
    }
    ctx.commit('SET_REQUESTS', requests);
  },
  async contactCoach(ctx, payload) {
    const req = {
      email: payload.email,
      message: payload.message
    };
    const res = await fetch(
      `https://vue-academind-bb347-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(req)
      }
    );
    const resData = await res.json();
    if (!res.ok) {
      const err = new Error(res.message || 'Something went wrong');
      throw err;
    }
    req.id = resData.name;
    req.coachId = payload.coachId;
    ctx.commit('ADD_REQUEST', req);
  }
};
