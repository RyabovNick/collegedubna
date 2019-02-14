<template>
  <v-app>
    <h1>Новостная лента</h1>
    <news></news>
  </v-app>
</template>

<script>
import News from '../components/News'

export default {
  components: {
    News
  }
}
</script>
