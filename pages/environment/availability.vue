<template>
  <v-app>
    <h1>Паспорт доступности</h1>
    <link-button :link="link" :msg="msg"/>
    <link-button :link="link2" :msg="msg2"/>
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
      link: '/environment/availability/availability_passport.pdf',
      msg: 'Открыть паспорт доступности',
      link2: '/environment/availability/responsible.pdf',
      msg2: 'Распоряжение о назначении ответственных'
    }
  }
}
</script>
