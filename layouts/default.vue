<style scoped>
.btn {
  min-width: 3.2em;
  font-size: 16px;
}

.btn .icon--right {
  margin-left: 0px;
}

.btn__content {
  display: inline-block;
}

.hidden-sm-and-down {
  margin-right: 5px;
}

.list__tile a {
  color: inherit;
  text-decoration-line: inherit;
}

.list__tile a {
  color: inherit;
  text-decoration-line: inherit;
}

.v-list__tile a {
  padding: 0;

  text-decoration-line: inherit;
}

.application--wrap {
  min-height: 76vh;
}

.toolbar .content {
  padding: 0;
}

.v-toolbar__content {
  padding-left: 0px;
}

.v-toolbar__title {
  display: inline-table;
  color: #ffffff;
}

.toolbar__items a {
  color: #ffffff;
}

.btn__content i {
  vertical-align: bottom;
}

@media only screen and (max-width: 670px) {
  .v-toolbar__title {
    display: none !important;
  }

  .headerlogo {
    display: none;
  }
}

@media only screen and (max-width: 960px) {
  .headerlogo {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  .hidden-sm-and-down {
    display: inline-block;
  }

  .toolbar__items {
    margin-right: 2em;
  }
}

@media only screen and (min-width: 670px) {
  .v-toolbar__title .hidden-sm-and-down {
    display: initial !important;
  }
}

@media only screen and (max-width: 1200px) {
  .hidden-sm-and-down {
    display: none !important;
  }

  .toolbar__items {
    margin-right: 2em;
  }
}

@media screen and (min-width: 960px) {
  .toolbar__items {
    padding-top: 8em;
  }
}

@media (-webkit-min-device-pixel-ratio: 2.1),
  only screen and (min-device-width: 320px) and (max-device-width: 850px) and (-webkit-min-device-pixel-ratio: 1.5) {
  .v-list__tile__title {
    font-size: 12px;
  }
  .v-navigation-drawer {
    width: 325px;
  }
}

.v-footer {
  text-align: center;
}

.v-list__tile {
  padding: 0 12px;
}

.v-list__group__header div > .v-list__tile {
  padding-left: 0;
}

.v-list__tile__action {
  min-width: 38px;
}

.toolbar__items a {
  color: #ffffff;
}

.theme--light.v-toolbar,
.theme--light.v-btn {
  color: #ffffff;
}

/*Перенос не умещающихся пунктов меню на новую строку*/
.v-list__tile__title,
.v-list__tile__sub-title {
  white-space: inherit;
  overflow: inherit;
}

.v-list__tile__title {
  height: 40px;
  line-height: 14px;
}

.navAlign {
  padding-top: 12px;
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
}

/* menu */
.menu--style {
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  display: none;
}

.menu--style--title {
  height: 28px;
  line-height: 17px;
}

.headerlogo {
  height: 125px;
  margin-top: 62px;
}
</style>

<style>
.v-list__group__header div > .v-list__tile {
  padding-left: 0;
}

.v-list--group__header .v-list--group__header__prepend-icon {
  min-width: 54;
  padding-left: 16px;
}

.application .application--wrap {
  min-height: 76vh;
}
</style>



<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      width="355"
      disable-resize-watcher
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
            active-class="sizers"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="navAlign">{{ item.text }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i">
              <router-link class="v-list__tile" :to="child.link">
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <span class="navAlign">{{ child.text }}</span>
                  </v-list-tile-title>
                </v-list-tile-content>
              </router-link>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <router-link class="v-list__tile" :to="item.link">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="navAlign">{{ item.text }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="clipped"
      color="blue darken-3"
      :extended="this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm' ? false : true"
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <img class="headerlogo" src="/image/headerlogowhite.png">
      <router-link to="/">
        <v-toolbar-title v-text="title"/>
      </router-link>
      <v-spacer></v-spacer>
      <div v-for="(item, index) in toolbar" :key="index" class="toolbar__items">
        <router-link class="btn btn--flat btn--router" :to="item.link">
          <div class="btn__content">
            <span class="hidden-sm-and-down">{{ item.text }}</span>
            <i
              aria-hidden="true"
              class="icon icon--right material-icons"
              :title="`${item.text}`"
            >{{ item.icon }}</i>
          </div>
        </router-link>
      </div>
      <v-menu offset-y style="display: none">
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on" class="menu--style">
            <span>Конкурсы и олимпиады</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
        </template>

        <v-list>
          <v-list-tile v-for="(item, i) in itemsMenu" :key="i" :to="item.link" nuxt>
            <v-list-tile-title class="menu--style--title" v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon large to="/special">
        <v-icon title="Версия для слабовидящих">remove_red_eye</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer height="auto">
      <v-card flat tile class="flex">
        <v-card-text class="lighten-3">
          <v-layout>
            <v-flex xs12 layout column>
              <span class="body-2">
                <b>КОНТАКТЫ</b>
              </span>
              <div>
                <v-icon size="18px" class="mr-3">home</v-icon>141980, Московская область, г. Дубна, ул. Энтузиастов, д. 21
              </div>
              <div>
                <v-icon size="18px" class="mr-3">contact_mail</v-icon>
                <a :href="`mailto:college@uni-dubna.ru`">college@uni-dubna.ru</a>
              </div>
              <div>
                <v-icon size="18px" class="mr-3">phone</v-icon>8(496)216-61-52, 8(496)216-61-71, 216-61-67
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      itemsMenu: [
        { text: 'WorldSkills', link: '/competitions/worldskills' },
        { text: 'Олимпиады', link: '/competitions/olimpiads' },
        { text: 'Конкурсы', link: '/competitions/contest' },
        { text: 'Демонстрационный экзамен', link: '/competitions/demo_exam' }
      ],
      items: [
        { icon: 'home', text: 'Главная', link: '/' },
        { icon: 'account_balance', text: 'О нас', link: '/about' },
        { icon: 'people', text: 'Абитуриентам', link: '/abitur' },
        {
          icon: 'school',
          text: 'О профессиях и специальностях',
          link: '/speciality'
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Сведения об образовательной организации',
          model: false,
          children: [
            { text: 'Основные сведения', link: '/sveden/common' },
            {
              text:
                'Структура и органы управления образовательной организацией',
              link: '/sveden/struct'
            },
            {
              text: 'Документы',
              link: '/sveden/document'
            },
            {
              text: 'Образование',
              link: '/sveden/education'
            },
            {
              text: 'Образовательные стандарты',
              link: '/sveden/eduStandarts'
            },
            {
              text:
                'Руководство. Педагогический (научно-педагогический) состав',
              link: '/sveden/employees'
            },
            {
              text:
                'Материально-техническое обеспечение \n и оснащенность образовательного процесса',
              link: '/sveden/objects'
            },
            {
              text: 'Стипендии и иные виды материальной поддержки',
              link: '/sveden/grants'
            },
            {
              text: 'Платные образовательные услуги',
              link: '/sveden/paid_edu'
            },
            {
              text: 'Финансово-хозяйственная деятельность',
              link: '/sveden/budget'
            },
            {
              text: 'Вакантные места для приема (перевода)',
              link: '/sveden/vacant'
            }
          ]
        },
        {
          icon: 'accessible',
          'icon-alt': 'accessible',
          text: 'Доступная среда',
          model: false,
          children: [
            {
              text: 'Виртуальная экскурсия',
              link: '/environment/virtual_tour'
            },
            { text: 'Паспорта доступности', link: '/environment/availability' },
            { text: 'Дорожная карта', link: '/environment/road_map' },
            { text: 'Нормативное обеспечение', link: '/environment/normative' },
            { text: 'Оборудование', link: '/environment/equipment' },
            { text: 'Профориентация', link: '/environment/career_guidance' },
            {
              text: 'Перечень мер социальной поддержки',
              link: '/environment/social_support'
            },
            { text: 'Трудоустройство', link: '/environment/employment' }
          ]
        },
        {
          icon: 'computer',
          'icon-alt': 'computer',
          text: 'Конкурсы и олимпиады',
          model: false,
          children: [
            {
              text: 'WorldSkills',
              link: '/competitions/worldskills'
            },
            { text: 'Олимпиады', link: '/competitions/olimpiads' },
            { text: 'Конкурсы', link: '/competitions/contest' },
            {
              text: 'Демонстрационный экзамен',
              link: '/competitions/demo_exam'
            }
          ]
        },
        { icon: 'contacts', text: 'Контакты', link: '/contacts' },
        {
          icon: 'remove_red_eye',
          text: 'Версия для слабовидящих',
          link: '/special'
        }
      ],
      toolbar: [
        { icon: 'account_balance', text: 'О нас', link: '/about' },
        { icon: 'people', text: 'Абитуриентам', link: '/abitur' },
        {
          icon: 'school',
          text: 'О профессиях и специальностях',
          link: '/speciality'
        },
        { icon: 'contacts', text: 'Контакты', link: '/contacts' }
      ],
      title: 'Колледж университета "Дубна"'
    }
  }
}
</script>
