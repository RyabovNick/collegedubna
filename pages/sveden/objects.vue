<style scoped>
.v-card .v-card__title .v-input {
  max-width: 500px;
  margin: auto;
}

h2 {
  text-align: center;
  padding-bottom: 1em;
  padding-top: 1em;
}
</style>

<template>
  <v-app>
    <h1>Материально-техническое обеспечение</h1>
    <h2>Наличие оборудованных учебных кабинетов, объектов для проведения практических занятий</h2>
    <section v-if="educodeErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-expansion-panel focusable>
        <v-expansion-panel-content v-for="(item, i) in educode" :key="i">
          <div slot="header">{{ item.cab_head}}</div>
          <v-card>
            <section v-if="educodeErr">
              <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
            </section>
            <section v-else>
              <v-card>
                <v-card-title></v-card-title>
                <v-data-table
                  :headers="headersEducode"
                  :items="cabs[i]"
                  expand
                  class="elevation-2"
                  rows-per-page-text="Записей на странице"
                >
                  <template slot="items" slot-scope="props">
                    <td itemprop="discipline" class="text-xs-left">{{ props.item.discipline }}</td>
                    <td itemprop="cabname" class="text-xs-right">{{ props.item.cabname }}</td>
                    <td itemprop="address" class="text-xs-right">{{ props.item.address }}</td>
                    <td itemprop="disabled" class="text-xs-right">{{ props.item.disabled }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </section>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </section>
    <h2>
      Сведения о наличии библиотек, объектов спорта, об условиях питания и
      охраны здоровья обучающихся
    </h2>
    <section v-if="purposelibrErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-data-table
          :headers="headersPurposelibr"
          :items="purposelibr"
          expand
          class="elevation-2"
          hide-actions
          itemprop="purposeLibr"
        >
          <template slot="items" slot-scope="props">
            <td itemprop="name" class="text-xs-left">{{ props.item.name }}</td>
            <td itemprop="area" class="text-xs-right">{{ props.item.area }}</td>
            <td itemprop="placecount" class="text-xs-right">{{ props.item.placecount }}</td>
            <td itemprop="docs" class="text-xs-center">
              <a
                v-if="props.item.docs !== null"
                :href="`/files/${props.item.docs}`"
                download
                target="_self"
              >
                <img
                  class="icon-size"
                  src="@/assets/icons/download.svg"
                  alt="Скачать"
                  title="Скачать"
                >
              </a>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </section>

    <h2>Сведения о доступе к электронной информационно-образовательной среде, информационным системам и информационно-телекоммуникационным сетям и электронным ресурсам, к которым обеспечивается доступ обучающихся</h2>
    <section v-if="purposeeiosErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-data-table
          :headers="headersPurposeeios"
          :items="purposeeios"
          expand
          class="elevation-2"
          hide-actions
          itemprop="purposeEios"
        >
          <template slot="items" slot-scope="props">
            <td itemprop="name" class="text-xs-left">{{ props.item.name }}</td>
            <td itemprop="quantity" class="text-xs-right">{{ props.item.quantity }}</td>
          </template>
        </v-data-table>
      </v-card>
    </section>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      headersEducode: [
        {
          text:
            'Наименование дисциплины (модуля), практик в соответствии с учебным планом',
          sortable: false,
          value: 'disciplineName'
        },
        {
          text:
            'Наименование учебных кабинетов, лабораторий, мастерских и других помещений для реализации образовательной программы',
          sortable: false,
          value: 'cabName'
        },
        {
          text:
            'Оснащенность учебных кабинетов, лабораторий, мастерских и других помещений для реализации образовательной программы',
          sortable: false,
          value: 'cabDescription'
        },
        {
          text:
            '	Приспособленность помещений для использования лицами с ограниченными возможностями здоровья',
          sortable: false,
          value: 'disabled'
        }
      ],
      headersPurposelibr: [
        {
          text: 'Вид помещения',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Площадь, м2',
          sortable: false,
          value: 'area'
        },
        {
          text: 'Количество мест',
          sortable: false,
          value: 'placecount'
        },
        {
          text: 'Копии документов',
          sortable: false,
          value: 'docs'
        }
      ],
      headersPurposeeios: [
        {
          text: 'Наименование',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Количество',
          sortable: false,
          value: 'quantity'
        }
      ]
    }
  },
  async fetch({ store }) {
    store.dispatch('objects/setErrorsToFalse')

    const fetchEducode = store.dispatch('objects/fetchEducode')
    const fetchPurposelibr = store.dispatch('objects/fetchPurposelibr')
    const fetchPurposeeios = store.dispatch('objects/fetchPurposeeios')

    await fetchEducode.catch(() => {
      store.commit('objects/setEducodeErr', true)
    })
    await fetchPurposelibr.catch(() => {
      store.commit('objects/setPurposelibrErr', true)
    })
    await fetchPurposeeios.catch(() => {
      store.commit('objects/setPurposeeiosErr', true)
    })
  },
  computed: {
    ...mapGetters({
      educode: 'objects/educode',
      educodeErr: 'objects/educodeErr',
      purposelibr: 'objects/purposelibr',
      purposelibrErr: 'objects/purposelibrErr',
      purposeeios: 'objects/purposeeios',
      purposeeiosErr: 'objects/purposeeiosErr',
      cabs: 'objects/cabs',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
