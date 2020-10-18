<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CustomCard title="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomCard from '@/components/CustomCard.vue'

export default {
  name: 'Home',
  components: {
    CustomCard
  }
}
</script>
