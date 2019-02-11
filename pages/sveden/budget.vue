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
      theader: 'Финансово-хозяйственная деятельность',
      thref: 'budget',
      ttext: 'информацию о финансово-хозяйственной деятельности'
    }
  }
}
</script>
