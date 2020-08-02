<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-btn width="100%" disabled>Le pourquoi</v-btn>
        <p class="mt-2 pa-2">TEXTE</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col>
            <v-card class="mx-auto blue-grey lighten-5">
              <v-card-text>
                <v-avatar color="yellow" size="35">
                  <span class="white--text headline">AF</span>
                </v-avatar>
                <h4>Altern Fodhyn</h4>
                <div>Créateur de l'univers</div>
              </v-card-text>
              <v-card-actions class="d-flex justify-end">
              <v-btn text color="deep-orange accent-2" disabled>En savoir plus</v-btn>
            </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto blue-grey lighten-5">
              <v-card-text>
                <v-avatar color="blue" size="35">
                  <span class="white--text headline">ANC</span>
                </v-avatar>
                <h4>Angelus N.C.</h4>
                <div>Premiers des aventuriers</div>
              </v-card-text>
              <v-card-actions class="d-flex justify-end">
              <v-btn text color="deep-orange accent-2" disabled>En savoir plus</v-btn>
            </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Apropos.js"></script>