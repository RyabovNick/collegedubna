<style scoped>
.v-btn--size {
  min-width: 20em;
  max-width: 55em;
}

.v-btn--large {
  height: 70px;
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

<style>
.v-btn__text--white-space .v-btn__content {
  white-space: inherit;
  text-align: center;
}
</style>

<template>
  <v-btn
    :href="link"
    :target="target"
    depressed
    large
    color="primary"
    class="v-btn--size v-btn__text--white-space"
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
