<template
  ><div>
    <base-dialog :show="!!error" @close="handleError" title="An error occured">
      <p>
        {{ error }}
      </p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilter" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button @click="fetchCoaches(true)">Refresh</base-button>
          <base-button v-if="!isCoach && !isLoading" link to="/register"
            >Register</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches && !isLoading">
          <coach-item
            v-for="coach in filteredCoaches"
            :id="coach.id"
            :key="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          />
        </ul>
        <h3 v-else>No Coaches Found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseCard from '../../components/UI/BaseCard';
import CoachItem from '../../components/coaches/CoachItem';
import BaseButton from '../../components/UI/BaseButton.vue';
import CoachFilter from '../../components/coaches/CoachFilter';
export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
    CoachFilter
  },
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    ...mapActions('coaches', ['loadCoaches']),
    handleError() {
      this.error = null;
    },
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async fetchCoaches(refresh) {
      this.isLoading = true;
      try {
        await this.loadCoaches(refresh);
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    }
  },
  created() {
    this.fetchCoaches();
  },
  computed: {
    ...mapGetters('coaches', ['hasCoaches', 'isCoach']),
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
