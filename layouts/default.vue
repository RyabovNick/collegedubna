<style scoped>
.v-footer {
  text-align: center;
}
</style>


<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      width="355"
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <div v-for="(item, index) in toolbar" :key="index" class="toolbar__items">
        <router-link class="btn btn--flat btn--router" :to="item.link">
          <div class="btn__content">
            <span class="hidden-sm-and-down">{{ item.text }}</span>
            <i aria-hidden="true" class="icon icon--right material-icons">{{ item.icon }}</i>
          </div>
        </router-link>
      </div>
      <v-btn icon large>
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
      items: [
        { icon: 'home', title: 'Главная', to: '/' },
        { icon: 'account_balance', title: 'О нас', to: '/about' },
        { icon: 'people', title: 'Абитуриентам', to: '/abitur' },
        {
          icon: 'school',
          title: 'О профессиях и специальностях',
          to: '/speciality'
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          title: 'Сведения об образовательной организации',
          model: false,
          children: [
            { title: 'Основные сведения', to: '/sveden/common' },
            {
              title:
                'Структура и органы управления образовательной организацией',
              to: '/sveden/struct'
            },
            {
              title: 'Документы',
              to: '/sveden/document'
            },
            {
              title: 'Образование',
              to: '/sveden/education'
            },
            {
              title: 'Образовательные стандарты',
              to: '/sveden/eduStandarts'
            },
            {
              title:
                'Руководство. Педагогический (научно-педагогический) состав',
              to: '/sveden/employees'
            },
            {
              title:
                'Материально-техническое обеспечение \n и оснащенность образовательного процесса',
              to: '/sveden/objects'
            },
            {
              title: 'Стипендии и иные виды материальной поддержки',
              to: '/sveden/grants'
            },
            {
              title: 'Платные образовательные услуги',
              to: '/sveden/paid_edu'
            },
            {
              title: 'Финансово-хозяйственная деятельность',
              to: '/sveden/budget'
            },
            {
              title: 'Вакантные места для приема (перевода)',
              to: '/sveden/vacant'
            }
          ]
        },
        {
          icon: 'accessible',
          'icon-alt': 'accessible',
          title: 'Доступная среда',
          model: false,
          children: [
            { title: 'Виртуальная экскурсия', to: '/environment/virtual_tour' },
            { title: 'Паспорта доступности', to: '/environment/availability' },
            { title: 'Дорожная карта', to: '/environment/road_map' },
            { title: 'Нормативное обеспечение', to: '/environment/normative' },
            { title: 'Оборудование', to: '/environment/equipment' },
            { title: 'Профориентация', to: '/environment/career_guidance' },
            {
              title: 'Перечень мер социальной поддержки',
              to: '/environment/social_support'
            },
            { title: 'Трудоустройство', to: '/environment/employment' }
          ]
        },
        { icon: 'contacts', title: 'Контакты', to: '/contacts' },
        {
          icon: 'remove_red_eye',
          title: 'Версия для слабовидящих',
          to: '/special'
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
