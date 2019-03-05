<style scoped>
.nuxt-link {
  margin-left: auto;
  margin-right: auto;
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
    <nuxt-link :to="link3" class="nuxt-link">
      <link-button :msg="msg3"/>
    </nuxt-link>
    <nuxt-link :to="link4" class="nuxt-link">
      <link-button :msg="msg4"/>
    </nuxt-link>
    <link-button :link="link5" :msg="msg5"/>
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
      link: './normative',
      msg: 'Нормативная база',
      link2: './responsibilities',
      msg2: 'Обязанности работодателей',
      link3: './rights',
      msg3: 'Права инвалидов',
      link4: './work',
      msg4: 'Трудоустройство',
      link5: 'http://www.profk-dubna.ru/',
      msg5: 'Аналитический центр "Образование и карьера"'
    }
  }
}
</script>
