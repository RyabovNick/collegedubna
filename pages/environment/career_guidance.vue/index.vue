<style scoped>
.nuxt-link {
  display: contents;
}
</style>

<template>
  <v-app>
    <h1>Профориентация</h1>
    <nuxt-link :to="link" class="nuxt-link">
      <link-button :msg="msg"/>
    </nuxt-link>
    <nuxt-link :to="link2" class="nuxt-link">
      <link-button :msg="msg2"/>
    </nuxt-link>
    <link-button :link="link3" :msg="msg3"/>
  </v-app>
</template>

<script>
import LinkButton from '../../../components/LinkButton'
export default {
  components: {
    LinkButton
  },
  data() {
    return {
      link: './virtual_test',
      msg: 'Инструкция по эксплуатации платформы',
      target: '_self',
      link2: '/speciality',
      msg2: 'Профессиограммы',
      link3: 'http://мой-ориентир.рф/',
      msg3: 'Мой ориентир'
    }
  }
}
</script>
