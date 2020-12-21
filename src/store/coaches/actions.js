export default {
  async registerCoach(ctx, data) {
    const userId = ctx.rootGetters.userId;
    const coach = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const res = await fetch(
      `https://vue-academind-bb347-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach)
      }
    );
    if (!res.ok) {
      // err
    }

    ctx.commit('REGISTER_COACH', {
      ...coach,
      id: userId
    });
  },
  async loadCoaches(ctx) {
    const res = await fetch(
      `https://vue-academind-bb347-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const resData = await res.json();
    if (!res.ok) {
      const err = new Error(resData.message || 'Failed to fetch');
      throw err;
    }
    const coaches = [];
    for (let key in resData) {
      const coach = {
        id: key,
        firstName: resData[key].firstName,
        lastName: resData[key].lastName,
        description: resData[key].desccription,
        hourlyRate: resData[key].hourlyRate,
        areas: resData[key].areas
      };
      coaches.push(coach);
    }
    ctx.commit('SET_COACHES', coaches);
  }
};
