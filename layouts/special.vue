<template>
  <v-app id="special" :style="{background: backgroundColor}">
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
          <v-btn color="indigo" dark v-on="on">Настройки шрифта</v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" @click="changeFontSize(false)">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" @click="changeFontSize(true)">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-title>Размер шрифта: {{fontSize}}</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" @click="changeFontWeight(false)">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" @click="changeFontWeight(true)">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-title>Жирность шрифта: {{ fontWeight }}</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-btn fab dark small color="black" @click="changeColors(0)">
                  <v-icon dark></v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="white" @click="changeColors(1)">
                  <v-icon dark></v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="#063462" @click="changeColors(2)">
                  <v-icon dark></v-icon>
                </v-btn>
              </v-list-tile-action>

              <v-list-tile-title>Текст</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-switch
                  v-model="checkedFontFamily"
                  color="purple"
                  @change="changeFontFamily(checkedFontFamily)"
                ></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Шрифт: {{ fontFamily }}</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" @click="changeLetterSpacing(false)">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn fab dark small color="primary" @click="changeLetterSpacing(true)">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-title>Интервал: {{ letterSpacing.toFixed(1) }}</v-list-tile-title>
            </v-list-tile>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat @click="defaultSettings()">По умолчанию</v-btn>
            <v-btn color="primary" flat @click="menu = false">Сохранить</v-btn>
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
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    // popover, настройки шрифтов
    menu: false,
    checkedFontFamily: true, // arial
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
    ],
    themes: [
      { fontColor: 'black', backgroundColor: 'white' },
      { fontColor: 'white', backgroundColor: 'black' },
      { fontColor: '#063462', backgroundColor: '#9dd1ff' }
    ]
  }),
  computed: {
    ...mapGetters({
      fontSize: 'special/fontSize',
      color: 'special/color',
      backgroundColor: 'special/backgroundColor',
      fontFamily: 'special/fontFamily',
      letterSpacing: 'special/letterSpacing',
      fontWeight: 'special/fontWeight'
    })
  },
  methods: {
    ...mapActions({
      changeFontSize: 'special/changeFontSize',
      changeFontFamily: 'special/changeFontFamily',
      changeFontWeight: 'special/changeFontWeight',
      changeLetterSpacing: 'special/changeLetterSpacing',
      changeColor: 'special/changeColor',
      changeBackgroundColor: 'special/changeBackgroundColor'
    }),
    defaultSettings() {
      this.menu = false
      this.$store.commit('special/setDefault')
    },
    // change font color and theme color
    changeColors(themeId) {
      this.changeColor(this.themes[themeId].fontColor)
      this.changeBackgroundColor(this.themes[themeId].backgroundColor)
    }
  }
}
</script>

<style>
</style>
