<template>
  <v-app>
    <h1>Оборудование</h1>
    <link-button :link="link" :msg="msg"/>
    <link-button :link="link2" :msg="msg2"/>
    <link-button :link="link3" :msg="msg3"/>
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
      link: '/environment/equipment/platform_instructions.pdf',
      msg: 'Инструкция по эксплуатации платформы',
      link2: '/environment/equipment/act_of_readiness_equipment_2018.pdf',
      msg2: 'Акт готовности подъемного оборудования',
      link3: '/environment/equipment/help_instructions.PDF',
      msg3: 'Инструкция по выполнению действий по оказанию помощи'
    }
  }
}
</script>
