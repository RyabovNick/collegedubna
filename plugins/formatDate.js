import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', value => {
  moment.locale('ru')
  if (value) {
    return moment(String(value)).format('DD MMMM YYYY')
  }
})
