<style scoped>
table.v-table {
  width: auto;
  margin: auto;
  max-width: 100%;
}

.v-input__slot {
  max-width: max-content;
  margin: auto;
}

.v-card .v-card__title .v-input {
  max-width: 500px;
  margin: auto;
}

h2 {
  text-align: center;
}
</style>

<template>
  <v-app>
    <h1>Рейтинг выпускников</h1>
    <section v-if="err">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <div v-if="loading">Загрузка...</div>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="ratings"
          expand
          :search="search"
          class="elevation-2"
          rows-per-page-text="Записей на странице"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th
                v-for="header in props.headers"
                :key="header.text"
                :rowspan="header.rowspan"
                :colspan="header.colspan"
              >{{ header.text }}</th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <td itemprop="eduCode" class="text-xs-left">{{ props.item.name }}</td>
            <td itemprop="eduName" class="text-xs-center">{{ props.item.rating }}</td>
            <td itemprop="eduName" class="text-xs-center">{{ props.item.special }}</td>
            <td itemprop="eduName" class="text-xs-center">{{ props.item.score }}</td>
            <td itemprop="eduName" class="text-xs-center">{{ props.item.social }}</td>
          </template>
        </v-data-table>
      </v-card>
    </section>
  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      search: '',
      err: false,
      headers: [
        {
          text: 'ФИО выпускника',
          align: 'left',
          sortable: false,
          value: 'name'
        },

        {
          text: 'Рейтинг',
          sortable: false,
          value: 'rating'
        },
        {
          text: 'Специальность/профессия',
          sortable: false,
          value: 'special'
        },
        {
          text: 'Средний балл диплома (5- балльная шкала)',
          sortable: false,
          value: 'score'
        },
        {
          text: 'Социальная адаптированность (100-балльная шкала)',
          sortable: false,
          value: 'social'
        }
      ], // yt
      loading: false,
      ratings: [
        {
          name: 'Нестеренко Евгений Сергеевич',
          rating: '95',
          special: '15.02.08 Технология машиностроения',
          score: '4,74',
          social: '95'
        },
        {
          name: 'Кленкова Анастасия Владимировна',
          rating: '94',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,71',
          social: '96'
        },
        {
          name: 'Ковалинский Анатолий Владимирович',
          rating: '91',
          special: '15.02.08 Технология машиностроения',
          score: '4,54',
          social: '95'
        },
        {
          name: 'Курилина Людмила Михайловна',
          rating: '91',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,57',
          social: '80'
        },
        {
          name: 'Сорокина Дарья Леонидовна',
          rating: '89',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,46',
          social: '95'
        },
        {
          name: 'Фещак Андрей Васильевич',
          rating: '89',
          special: '15.02.08 Технология машиностроения',
          score: '4,46',
          social: '95'
        },
        {
          name: 'Матвиенко Дмитрий Игоревич',
          rating: '87',
          special: '15.02.08 Технология машиностроения',
          score: '4,37',
          social: '95'
        },
        {
          name: 'Ледовская Алена Андреевна',
          rating: '87',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,36',
          social: '95'
        },
        {
          name: 'Ваганова Юлия Андреевна',
          rating: '86',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,32',
          social: '95'
        },
        {
          name: 'Демидов Дмитрий Игоревич',
          rating: '86',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,32',
          social: '95'
        },
        {
          name: 'Горшков Семен Сергеевич',
          rating: '86',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4,32',
          social: '95'
        },
        {
          name: 'Паникарова Анна Сергеевна',
          rating: '86',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '4,32',
          social: '95'
        },
        {
          name: 'Муренцов Илья Валерьевич',
          rating: '86',
          special: '15.02.08 Технология машиностроения',
          score: '4,31',
          social: '90'
        },
        {
          name: 'Пантыкин Константин Александрович',
          rating: '85',
          special: '15.02.08 Технология машиностроения',
          score: '4,23',
          social: '90'
        },
        {
          name: 'Поздняков Даниил Владиславович',
          rating: '85',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4,26',
          social: '85'
        },
        {
          name: 'Кулагин Евгений Юрьевич',
          rating: '84',
          special: '15.02.08 Технология машиностроения',
          score: '4,2',
          social: '95'
        },
        {
          name: 'Рассыпнов Дмитрий Николаевич',
          rating: '83',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4,14',
          social: '85'
        },
        {
          name: 'Мозжухин Никита Геннадьевич',
          rating: '83',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4,15',
          social: '80'
        },
        {
          name: 'Стогов Данила Романович',
          rating: '82',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4,11',
          social: '90'
        },
        {
          name: 'Кузнецов Никита Денисович',
          rating: '81',
          special: '15.02.08 Технология машиностроения',
          score: '4,06',
          social: '95'
        },
        {
          name: 'Терещенко Андрей Александрович',
          rating: '81',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4,05',
          social: '90'
        },
        {
          name: 'Рыбин Даниил Александрович',
          rating: '81',
          special: '15.02.08 Технология машиностроения',
          score: '4,03',
          social: '90'
        },
        {
          name: 'Петрова Светлана Сергеевна',
          rating: '80',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '4',
          social: '90'
        },
        {
          name: 'Парфенов Никита Андреевич',
          rating: '80',
          special: '15.02.08 Технология машиностроения',
          score: '4',
          social: '90'
        },
        {
          name: 'Рябов Артем Владимирович',
          rating: '80',
          special: '15.02.08 Технология машиностроения',
          score: '4',
          social: '90'
        },
        {
          name: 'Давыдов Михаил Александрович',
          rating: '77',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,85',
          social: '80'
        },
        {
          name: 'Телегин Евгений Иванович',
          rating: '77',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,86',
          social: '60'
        },
        {
          name: 'Алексашин Андрей Андреевич',
          rating: '76',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,79',
          social: '90'
        },
        {
          name: 'Синяев Максим Александрович',
          rating: '76',
          special: '15.02.08 Технология машиностроения',
          score: '3,8',
          social: '80'
        },
        {
          name: 'Волгушева Алёна Андреевна',
          rating: '75',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,75',
          social: '95'
        },
        {
          name: 'Жолнович Яна Сергеевна',
          rating: '75',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,75',
          social: '95'
        },
        {
          name: 'Таращев Павел Владимирович',
          rating: '75',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,76',
          social: '45'
        },
        {
          name: 'Царьков Алексей Андреевич',
          rating: '74',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,71',
          social: '95'
        },
        {
          name: 'Берестов Роман Павлович',
          rating: '74',
          special: '15.02.08 Технология машиностроения',
          score: '3,69',
          social: '75'
        },
        {
          name: 'Солдатов Никита Алексеевич',
          rating: '74',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,68',
          social: '55'
        },
        {
          name: 'Левыкин Андрей Андреевич',
          rating: '73',
          special: '15.02.08 Технология машиностроения',
          score: '3,63',
          social: '90'
        },
        {
          name: 'Весельский Юрий Андреевич',
          rating: '73',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,64',
          social: '75'
        },
        {
          name: 'Корнилов Ярослав Евгеньевич',
          rating: '72',
          special: '15.02.08 Технология машиностроения',
          score: '3,6',
          social: '80'
        },
        {
          name: 'Крылова Светлана Николаевна',
          rating: '71',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,54',
          social: '95'
        },
        {
          name: 'Громов Сергей Александрович',
          rating: '71',
          special: '15.02.08 Технология машиностроения',
          score: '3,54',
          social: '90'
        },
        {
          name: 'Федоров Андрей Александрович',
          rating: '71',
          special: '15.02.08 Технология машиностроения',
          score: '3,57',
          social: '80'
        },
        {
          name: 'Грибков Александр Романович',
          rating: '71',
          special: '15.02.08 Технология машиностроения',
          score: '3,54',
          social: '80'
        },
        {
          name: 'Арзиев Денис Сергеевич',
          rating: '70',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,5',
          social: '95'
        },
        {
          name: 'Лисицин Николай Олегович',
          rating: '70',
          special: '15.02.08 Технология машиностроения',
          score: '3,51',
          social: '80'
        },
        {
          name: 'Медведев Игорь Владимирович',
          rating: '70',
          special: '15.02.08 Технология машиностроения',
          score: '3,49',
          social: '80'
        },
        {
          name: 'Казаков Данила Максимович ',
          rating: '70',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,5',
          social: '65'
        },
        {
          name: 'Назаров Юрий Александрович',
          rating: '70',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,5',
          social: '60'
        },
        {
          name: 'Буяло Дмитрий Юрьевич',
          rating: '69',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,43',
          social: '95'
        },
        {
          name: 'Сидоров Дмитрий Сергеевич',
          rating: '69',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,46',
          social: '65'
        },
        {
          name: 'Серяков Андрей Вадимович',
          rating: '68',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,41',
          social: '75'
        },
        {
          name: 'Бабушкин Виталий Андреевич',
          rating: '67',
          special: '15.02.08 Технология машиностроения',
          score: '3,37',
          social: '80'
        },
        {
          name: 'Резник Александр Алексеевич',
          rating: '67',
          special: '15.02.08 Технология машиностроения',
          score: '3,34',
          social: '80'
        },
        {
          name: 'Карнаухов Артем Олегович',
          rating: '67',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,36',
          social: '50'
        },
        {
          name: 'Туманов Павел Сегеевич',
          rating: '66',
          special: '15.02.08 Технология машиностроения',
          score: '3,29',
          social: '80'
        },
        {
          name: 'Зинин Максим Витальевич',
          rating: '66',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,32',
          social: '65'
        },
        {
          name: 'Яковлев Алексей Игоревич',
          rating: '66',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,32',
          social: '65'
        },
        {
          name: 'Музыкантов Игорь Евгеньевич',
          rating: '65',
          special: '09.02.05 Прикладная информатика (по отраслям)',
          score: '3,25',
          social: '95'
        },
        {
          name: 'Марченко Максим Александрович',
          rating: '65',
          special: '15.02.08 Технология машиностроения',
          score: '3,26',
          social: '90'
        },
        {
          name: 'Марченко Сергей Александрович',
          rating: '65',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,27',
          social: '80'
        },
        {
          name: 'Гнеднев Дмитрий Антонович',
          rating: '65',
          special: '15.02.08 Технология машиностроения',
          score: '3,26',
          social: '75'
        },
        {
          name: 'Мартьянов Владислав Юрьевич',
          rating: '64',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,18',
          social: '80'
        },
        {
          name: 'Павличенко Роман Олегович',
          rating: '63',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,14',
          social: '75'
        },
        {
          name: 'Берестов Алексей Александрович',
          rating: '63',
          special:
            '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
          score: '3,14',
          social: '65'
        }
      ]
      // сюда добавить всех
    }
  }

  // это если тащить данные из базы
  // async fetch({ store }) {
  //   store.dispatch('vacant/setErrorsToFalse')

  //   try {
  //     await store.dispatch('vacant/fetchVacant')
  //   } catch {
  //     await store.commit('vacant/setVacantErr', true)
  //   }
  // },
  // computed: {
  //   ...mapGetters({
  //     vacant: 'vacant/vacant',
  //     vacantErr: 'vacant/vacantErr',
  //     errMessage: 'helpers/errMessage'
  //   })
  // }
}
</script>
