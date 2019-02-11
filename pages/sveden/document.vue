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
      theader: 'Документы',
      thref: 'document',
      ttext: 'документы'
    }
  }
}
</script>
