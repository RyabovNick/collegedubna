<template>
  <v-app>
    PAGINATION WILL BE HERE {{ $route.params.id}} {{ page }}
    <section v-for="n in news" :key="n.id">
      <h1>{{n.title}}</h1>
    </section>
    <div class="text-xs-center">
      <v-container>
        <v-layout justify-center>
          <v-flex xs8>
            <v-card>
              <v-card-text>
                <v-pagination v-model="page" :length="15" :next="paginationClick()"></v-pagination>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      news: []
    }
  },
  created() {
    this.page = Number(this.$route.params.id)
  },
  mounted() {
    this.$axios
      .get(`http://localhost:3000/api/news/page/${this.page}`)
      .then(response => (this.news = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  },

  methods: {
    paginationClick() {
      this.$router.push({ path: `/news/page/${this.page}` })
    }
  }
}
</script>
