<template>
  <v-container fluid class="pa-0 ma-0">
    <v-navigation-drawer permanent width="100%" class="pa-5">
      <v-row class="text-h3 pa-5">Dashboard</v-row>
      <v-row>
        <v-col class="ma-0 pa-0">
          <v-slide-group v-model="model" class="pa-0 ma-0 d-flex flex-column">
            <v-slide-item v-for="item in items" :key="item" v-slot:default="{ active, toggle }" class="mx-2">
              <v-card
                :color="active ? 'deep-orange' : 'black'"
                class="d-flex justify-center align-center"
                @click="toggle"
                dark
                width="175px"
                height="50px"
              >
                <div class="text-h6 px-2">{{ item }}</div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-col>
      <v-expand-transition class="ma-5">
        <v-sheet v-if="model != null" color="grey lighten-4" tile>
          <v-row v-if="model == 0" class="fill-height" align="center" justify="center">
            <Utilisateurs />
          </v-row>
          <v-row v-if="model == 1" class="fill-height" align="center" justify="center">
            <Textes />
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-col>
  </v-container>
</template>

<script src="./Dashboard.js"></script>