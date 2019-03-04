<template>
  <v-app>
    <h1>Дорожная карта</h1>
    <link-button :link="link" :msg="msg"/>
  </v-app>
</template>

<script>
import LinkButton from '../../components/LinkButton'
export default {
  components: {
    LinkButton
  },
  data() {
    return {
      link: '/environment/road_map/dk.pdf',
      msg: 'Открыть дорожную карту'
    }
  }
}
</script>
