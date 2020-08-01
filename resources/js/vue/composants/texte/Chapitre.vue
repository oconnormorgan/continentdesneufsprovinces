<template>
  <v-container fluid>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" class="d-flex align-center flex-column">
          <div>
            <v-card-title
              width="100%"
              max-height="300px"
              class="text-sm-h5 text-md-h4"
            >{{histoireTitre}}</v-card-title>
            <v-card-text>{{histoireResumé}}</v-card-text>
          </div>
          <!-- <v-card width="100%">
            <v-card-title>Genre</v-card-title>
            <v-card-text>
              <v-btn text small class="ma-0 pa-1">Genre</v-btn>,
              <v-btn text small class="ma-0 pa-1">Genre</v-btn>,
              <v-btn text small class="ma-0 pa-1">Genre</v-btn>
            </v-card-text>
          </v-card>-->
        </v-col>
        <!-- <v-col cols="12" md="4">
          <v-card
            class="mx-auto blue-grey lighten-5 d-flex flex-column justify-space-between"
            height="100%"
          >
            <v-card-text>
              <h4>Information</h4>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam aliquid laboriosam alias iste fugit explicabo doloremque officia ipsam accusantium enim assumenda earum inventore veritatis, nisi saepe sequi nemo unde.</div>
            </v-card-text>
            <v-card-actions class="d-flex">
              <v-text-field text color="deep-orange accent-2" label="E-mail" class="mx-3"></v-text-field>
              <v-btn
                color="white deep-orange--text text--accent-2"
                elevation="3"
                class="mx-3"
              >s'abonner</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>-->
      </v-row>
    </v-container>
    <v-card>
      <v-card-title>
        Chapitre
        <v-spacer></v-spacer>
        <v-btn icon v-if="auteur">
          <CreateChapitre />
        </v-btn>
      </v-card-title>
      <div v-if="auteur">
        <v-data-table class="mb-5" :headers="header" :items="chapitres" width="100%">
          <template v-slot:item.titre="{ item }">
            <v-btn
              text
              :to=" '/' + item.id + '/histoire' "
              class="deep-orange--text text--accent-2"
            >{{item.titre}}</v-btn>
          </template>
          <template v-slot:item.actions="{ item }">
            <EditChapitre :chapitre="chapitres" :item="item" />
            <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </div>
      <div v-if="!auteur">
        <v-data-table :headers="headers" :items="chapitres" width="100%">
          <template v-slot:item.titre="{ item }">
            <v-btn
              text
              :to=" '/' + item.id + '/histoire' "
              class="deep-orange--text text--accent-2"
            >{{item.titre}}</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </v-container>
</template>

<script src="./Chapitre.js"></script>