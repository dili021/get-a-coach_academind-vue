<template>
  <the-header />

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
export default {
  components: { TheHeader }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.2s ease-out;
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
