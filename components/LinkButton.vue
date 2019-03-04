<style scoped>
.v-btn--size {
  min-width: 25em;
  max-width: 55em;
}

.v-btn {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.theme--light.v-btn {
  color: #ffffff;
}
</style>

<template>
  <v-btn
    :href="link"
    :target="target"
    depressed
    large
    color="rgb(21, 101, 192)"
    class="v-btn--size"
  >{{ msg }}</v-btn>
</template>

<script>
export default {
  props: {
    link: String,
    msg: String,
    target: {
      type: String,
      default: '_blank'
    }
  }
}
</script>
