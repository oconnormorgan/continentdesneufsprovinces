<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0">
      <v-card class="pa-0 ma-0" width="100%">
        <v-breadcrumbs :items="items" class="pa-1 mx-5">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
            >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-card>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col cols="8" class="d-flex justify-center pa-0 ma-0">
        <v-card-title class="ma-0 pa-0">Titre</v-card-title>
      </v-col>
      <v-col cols="4">
        <v-card class="d-flex flex-column align-center">
          <v-card-title class="text-subtitle-1 ma-0 pa-0">Paramétre</v-card-title>
          <v-row class="d-flex justify-center ma-0 pa-0">
            <v-col cols="6" md="3" class="d-flex justify-center mx-2 pa-0" width="100%">
              <v-btn icon small @click="decrease">
                <v-icon>mdi-format-font-size-decrease</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" md="3" class="d-flex justify-center mx-2 pa-0" width="100%">
              <v-btn icon small @click="increase">
                <v-icon>mdi-format-font-size-increase</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-0 ma-0 d-flex flex-column" width="100%">
          <v-card-actions width="100%" class="d-flex justify-end">
            <!-- Début dialog -->

            <v-dialog v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon icon class="pa-2">mdi-fullscreen</v-icon>
                </v-btn>
              </template>
              <v-card class="ma-0 pa-0">
                <v-toolbar dark color="deep-black" class="ma-0 pa-0" width="100%">
                  <v-row class="d-flex justify-space-between align-center px-5" width="100%">
                    <div class="d-flex align-center">
                      <v-btn icon dark @click="dialog = false" class="px-2">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title class="px-2">Chapitre XX</v-toolbar-title>
                    </div>
                    <div>
                      <v-btn icon small class="px-2" @click="decrease">
                        <v-icon>mdi-format-font-size-decrease</v-icon>
                      </v-btn>
                      <v-btn icon small class="px-2" @click="increase">
                        <v-icon>mdi-format-font-size-increase</v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-toolbar>
                <texte class="mt-8" />
              </v-card>
            </v-dialog>

            <!-- Fin dialog -->
          </v-card-actions>
          <texte />
          <v-card-actions width="100%">
            <v-row class="d-flex justify-space-between">
              <v-col cols="12" md="4" class="ma-0 pa-0">
                <v-btn text class="ma-0 pa-0 justify-start" width="100%">
                  <v-icon icon class="pa-2">mdi-chevron-left</v-icon>chapitre précedent
                </v-btn>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pa-0">
                <v-btn text class="ma-0 pa-0" width="100%">liste des chapitres</v-btn>
              </v-col>
              <v-col cols="12" md="4" class="ma-0 pa-0">
                <v-btn text class="ma-0 pa-0 justify-end" width="100%">
                  chapitre suivant
                  <v-icon icon class="pa-2">mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-1 mb-3 d-flex flex-column" width="100%">information suplémentaires</v-card>
        <v-card class="pa-1 mb-3 d-flex flex-column" width="100%">Historique des modifications</v-card>
        <v-card class="pa-1 mb-3 d-flex flex-column" width="100%">Derniers commentaires</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Histoire.js"></script>