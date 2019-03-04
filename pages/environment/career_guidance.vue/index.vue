<style scoped>
.nuxt-link {
  margin-left: auto;
  margin-right: auto;
}
/* 
white space no wrap!!! */
</style>

<template>
  <v-app>
    <h1>Профориентация</h1>
    <nuxt-link :to="link" class="nuxt-link">
      <link-button :msg="msg"/>
    </nuxt-link>
    <link-button :link="link2" :msg="msg2"/>
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
      link: '../virtual_test',
      msg: 'Инструкция по эксплуатации платформы',
      target: '_self',
      link2: '/environment/equipment/act_of_readiness_equipment_2018.pdf',
      msg2: 'Акт готовности подъемного оборудования',
      link3: '/environment/equipment/help_instructions.PDF',
      msg3: 'Инструкция по выполнению действий по оказанию помощи'
    }
  }
}
</script>
