<template>
  <uni-struct v-bind:thref="thref" v-bind:theader="theader" v-bind:ttext="ttext"/>
</template>

<script>
import UniStruct from '../../components/UniStruct'

export default {
  components: {
    UniStruct
  },
  data() {
    return {
      theader: 'Платные образовательные услуги',
      thref: 'paid_edu',
      ttext: 'информацию о платных образовательных услугах'
    }
  }
}
</script>
