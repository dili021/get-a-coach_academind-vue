<template>
  <section>
    <base-card>
      <header>
        <h2>
          Requests Received
        </h2>
      </header>
      <ul v-if="hasRequests">
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
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem';

export default {
  components: {
    RequestItem
  },
  computed: {
    ...mapGetters('requests', ['getAllRequests', 'hasRequests'])
  }
};
</script>

<style scoped>
header {
  text-align: center;
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
