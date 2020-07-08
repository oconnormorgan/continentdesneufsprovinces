<template>
  <v-container fluid>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" class="d-flex align-center flex-column">
          <div>
            <v-card-title
              width="100%"
              max-height="300px"
              class="text-sm-h5 text-md-h3"
            >Le Wiki</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque, exercitationem placeat eius sit, molestiae neque illo ex commodi earum aut vero provident eos consequuntur doloremque sunt unde! Corporis, recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in maxime totam sapiente minima nisi provident nemo perferendis ducimus nam eum repudiandae voluptas hic explicabo consectetur tempora atque, quod soluta.</v-card-text>
          </div>
          <v-card width="100%">
            <v-card-title>Dernières ajout</v-card-title>
            <v-card-text>
              <v-btn text small class="ma-0 pa-1">Terme (XX / XX)</v-btn>,
              <v-btn text small class="ma-0 pa-1">Terme (XX / XX)</v-btn>,
              <v-btn text small class="ma-0 pa-1">Terme (XX / XX)</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto blue-grey lighten-5 d-flex flex-column justify-space-between" height="100%">
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
        </v-col>
      </v-row>
    </v-container>
    <v-card>
      <v-card-title>
        Bibliothèque
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Recherche"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="texte" :search="search"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Mots",
          align: "start",
          value: "mots"
        },
        { text: "Définitions", value: "definitions" },
        { text: "Date de la dernière modification", value: "date" },
      ],
      texte: [
        {
          mots: "Terme",
          definitions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam aliquid laboriosam alias iste fugit explicabo doloremque officia ipsam accusantium enim assumenda earum inventore veritatis, nisi saepe sequi nemo unde.",
          date: "xx / xx / xxxx",
        }
      ]
    };
  }
};
</script>