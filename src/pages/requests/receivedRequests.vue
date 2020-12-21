<template>
  <div>
    <base-dialog :show="!!error" @close="handleError" title="An error occured">
      <p>
        {{ error }}
      </p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>
            Received Requests
          </h2>
          <base-button @click="loadRequests">Refresh</base-button>
        </header>
        <base-spinner v-if="isLoading" />
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="request in getAllRequests"
            :key="request.id"
            :email="request.email"
            :message="request.message"
          />
        </ul>
        <h3 v-else>No received requests yet</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem';

export default {
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  created() {
    this.loadRequests();
  },
  components: {
    RequestItem
  },
  computed: {
    ...mapGetters('requests', ['getAllRequests', 'hasRequests'])
  },
  methods: {
    ...mapActions('requests', ['fetchRequests']),

    async loadRequests() {
      this.isLoading = true;
      try {
        await this.fetchRequests();
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
