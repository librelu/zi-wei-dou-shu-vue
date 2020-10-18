<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <CustomCard/>
    </v-main>
  </v-app>
</template>

<script>
import CustomCard from './components/CustomCard.vue';

export default {
  name: 'App',

  components: {
    CustomCard,
  },

  data: () => ({
    //
  }),
};
</script>
