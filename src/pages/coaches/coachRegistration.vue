<template>
  <section>
    <base-card>
      <h2>
        Register as a coach!
      </h2>
      <coach-form @save-data="saveData" />
    </base-card>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm';
export default {
  components: {
    CoachForm
  },
  methods: {
    ...mapActions('coaches', ['registerCoach']),
    saveData(data) {
      this.registerCoach(data);
      this.$router.replace('/coaches');
    }
  }
};
</script>
