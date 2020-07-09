<template>
  <v-container fluid class="pa-0 ma-0">
    <v-navigation-drawer permanent width="100%" class="pa-5">
      <v-row class="text-h3 pa-5">Dashboard</v-row>
      <v-row>
        <v-col class="ma-0 pa-0">
          <v-slide-group v-model="model" class="pa-0 ma-0 d-flex flex-column">
            <v-slide-item v-slot:default="{ active, toggle }" class="mx-2">
              <v-card
                :color="active ? 'deep-orange' : 'black'"
                class="d-flex justify-center align-center"
                @click="toggle"
                dark
                width="175px"
                height="50px"
              >
                <v-icon class="px-2">mdi-account-box-multiple</v-icon>
                <div class="text-h6 px-2">Utilisateurs</div>
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot:default="{ active, toggle }" class="mx-2">
              <v-card
                :color="active ? 'deep-orange' : 'black'"
                class="d-flex justify-center align-center"
                @click="toggle"
                dark
                width="175px"
                height="50px"
              >
                <v-icon class="px-2">mdi-book-open-page-variant</v-icon>
                <div class="text-h6 px-2">Textes</div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-col>
      <v-expand-transition class="ma-5">
        <v-sheet v-if="model != null" color="grey lighten-4" tile>
          <v-row align="center" justify="center" class="d-box">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
              width="100%"
            ></v-data-table>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  }
};
</script>