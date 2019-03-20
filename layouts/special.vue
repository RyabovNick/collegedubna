<template>
  <v-app id="special">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="(nav, i) in navigations" :key="i">
          <v-list-tile-action>
            <v-icon>{{nav.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{nav.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="140" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="indigo" dark v-on="on">Настройки шрифтов</v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" :click="changeFontSize(false)">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" :click="changeFontSize(true)">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-title>Размер шрифта: {{fontSize}}</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-btn fab dark small color="primary">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="primary">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-title>Enable hints</v-list-tile-title>
            </v-list-tile>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mapGetters
  // mapActions
} from 'vuex'

export default {
  data: () => ({
    // popover, настройки шрифтов
    menu: false,
    //
    drawer: null,
    navigations: [
      { icon: 'account_balance', text: 'О нас', to: '/special/about' },
      { icon: 'people', text: 'Абитуриентам', to: '/special/abitur' },
      {
        icon: 'school',
        text: 'О профессиях и специальностях',
        to: '/special/speciality'
      },
      { icon: 'contacts', text: 'Контакты', to: '/special/contacts' }
    ]
  }),
  computed: {
    ...mapGetters({
      fontSize: 'special/fontSize',
      color: 'special/color',
      fontFamily: 'special/fontFamily',
      letterSpacing: 'special/letterSpacing',
      fontWeight: 'special/fontWeight'
    })
    // ...mapActions({
    //   changeFontSize: 'special/changeFontSize'
    // })
  },
  methods: {
    changeFontSize(value) {
      // this.changeFontSize(value)
    }
  }
}
</script>

<style>
</style>
