<template>
  <section>
    <coach-filter @change-filter="setFilter" />
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="flat">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register</base-button>
      </div>
      <ul v-if="hasCoaches">
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
</template>

<script>
import { mapGetters } from 'vuex';
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
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
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
