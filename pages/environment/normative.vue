<template>
  <v-app>
    <h1>Нормативное обеспечение</h1>
    <link-button :link="link" :msg="msg"/>
    <link-button :link="link2" :msg="msg2"/>
    <link-button :link="link3" :msg="msg3"/>
    <link-button :link="link4" :msg="msg4"/>
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
      link:
        'http://inklysia.uni-dubna.ru/normativnye-dokumenty-federalnogo-znacheniya',
      msg: 'Нормативные документы федерального значения',
      link2:
        'http://inklysia.uni-dubna.ru/normativnye-dokumenty-moskovskoj-oblasti',
      msg2: 'Нормативные документы московской области',
      link3: 'http://inklysia.uni-dubna.ru/lokalnye-akty',
      msg3: 'Локальные акты',
      link4: 'http://inklysia.uni-dubna.ru/metodicheskoe-obespechenie',
      msg4: 'Методическое обеспечение'
    }
  }
}
</script>
