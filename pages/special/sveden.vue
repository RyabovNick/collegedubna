<style scoped>
@import '~/assets/css/special.css';
</style>


<template>
  <v-app :style="{background: backgroundColor}">
    <h1
      :style="{fontSize: (15+fontSize) + 'px',
                      color: color,
                      'font-family': fontFamily,
                      'letter-spacing': letterSpacing + 'px',
                      'font-weight': fontWeight}"
    >Основные сведения</h1>
    <section v-if="commonErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <div v-if="loading">Загрузка...</div>
      <v-data-table
        :items="common"
        class="elevation-1"
        hide-actions
        hide-headers
        :style="{fontSize: fontSize + 'px',
                      color: color,
                      'font-family': fontFamily,
                      'letter-spacing': letterSpacing + 'px',
                      'font-weight': fontWeight}"
      >
        <template slot="items" slot-scope="props">
          <td
            :style="{background: backgroundColor,
                      color: color}"
          >{{ props.item.name }}</td>
          <td
            class="text-xs-right"
            :itemprop="`${props.item.tag}`"
            :style="{background: backgroundColor,
                      color: color}"
          >{{ props.item.value }}</td>
        </template>
      </v-data-table>
    </section>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'special',
  data() {
    return {
      loading: false
    }
  },
  async fetch({ store }) {
    store.dispatch('common/setErrorsToFalse')
    try {
      await store.dispatch('common/fetchCommon')
    } catch {
      await store.commit('common/setCommonErr', true)
    }
  },
  computed: {
    ...mapGetters({
      common: 'common/common',
      commonErr: 'common/commonErr',
      errMessage: 'helpers/errMessage',
      fontSize: 'special/fontSize',
      color: 'special/color',
      backgroundColor: 'special/backgroundColor',
      fontFamily: 'special/fontFamily',
      letterSpacing: 'special/letterSpacing',
      fontWeight: 'special/fontWeight'
    })
  }
}
</script>
