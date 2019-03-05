import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', value => {
  moment.locale('ru')
  if (value) {
    return moment(String(value)).format('DD MMMM YYYY')
  }
})

Vue.filter('formatDateNews', value => {
  moment.locale('ru')
  const daysBetween = moment().diff(value, 'days')
  if (daysBetween > 1) {
    return moment(String(value)).format('DD MMMM YYYY')
  } else {
    return moment(value).fromNow()
  }
})
