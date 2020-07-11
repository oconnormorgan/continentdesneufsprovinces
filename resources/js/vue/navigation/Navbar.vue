<template>
  <v-container fluid class="ma-0 pa-0">
    <v-app-bar color="deep-black" dark class="ma-0 pa-0">
      <div class="pa-3 text-sm-h1 text-sm-h5" to="/">Le Continent des Neufs Provinces</div>
      <v-spacer></v-spacer>
      <div class="mb-0 pa-0 d-flex">
        <v-icon class="ma-0 pa-0">mdi-magnify</v-icon>
        <v-autocomplete class="mb-n3 pl-5" label="Recherche"></v-autocomplete>
      </div>
      <v-app-bar-nav-icon @click="drawer = true" class="pa-3"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right dark>
      <v-list nav dense>
        <v-card-title>Le Continent des Neufs Provinces</v-card-title>
        <v-list-item>
          <v-btn class="padding d-flex" text to="/login" width="100%">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Se connecter</v-list-item-title>
          </v-btn>
        </v-list-item>
        <v-divider class="my-5"></v-divider>
        <v-list-item-group active-class="orange--text text--accent-4">
          <v-list-item>
            <v-btn class="padding d-flex" text to="/" width="100%">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn class="padding d-flex" text to="/bibliotheque" width="100%">
              <v-list-item-icon>
                <v-icon>mdi-book-open-page-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Bibliothéque</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn class="padding d-flex" text to="/wiki" width="100%">
              <v-list-item-icon>
                <v-icon>mdi-wikipedia</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Le Wiki</v-list-item-title>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
        <v-divider class="my-5"></v-divider>
        <v-list-item-group active-class="orange--text text--accent-4">
          <v-list-item>
            <v-btn class="padding d-flex" text to="/dashboard" width="100%">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { authenticationService } from "../../_services/authentication.service";

export default {
  data: () => ({
    drawer: false
  })
};
</script>>