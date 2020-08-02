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
            >La grande bibliothèque</v-card-title>
            <v-card-text>
              <p>Il y a longtemps le monde fût détruit.</p>
              <p>Il y a longtemps, très longtemps, le monde était dominé par les Magus, des êtres disposant d'une énergie quasi infinie, d'une puissance incommensurable. Des êtres humains qui s'entraînaient jusqu'à la limite du corps humain et l'ont même dépassé pour devenir des êtres quasi-divin. Ils ont exploré le monde entier, le soumettant à leurs volontés. Mais un jour tout cela disparut... Comment et Pourquoi? Cela reste un mystère même 90 000 ans plus tard. Les anciennes connaissent furent perdue, oublié.</p>
              <p>Le continent, qui avait sombré dans le chaos fût recouvert par le sang, des guerres faisaient rage, des villes furent détruit par la violence et les flammes. Il ne reste que peu de trace écrite ou oral de cette époque, mais il reste une légende, celle du premier Haut-Seigneur, L'Overlord Primordial, Primus OCTAVIA. Nul ne sait d'où il venait, ni qui il était, mais en quelques années le continent entier tomba dans le creux de sa main. Il repensa le système des provinces, mis au point une hiérarchie, décida de loi, etc. Grâce à lui, le Continent des Neufs Province devient un endroit paisible. Pendant une bonne période le Premier Overlord dirigea le continent, mais il disparut un jour sans lancer de trace. La datation est approximative, mais on pense qu'il était Overlord il y a environ 80 000 ans. Les peuples du continent vécurent en paix en se remémorant les souvenirs de l'Overlord, mais rien n'est éternelle.</p>
            </v-card-text>
          </div>
          <!-- <v-card width="100%">
            <v-card-title>Dernières parution</v-card-title>
            <v-card-text>
              <v-btn text small class="ma-0 pa-1">Titre (XX / XX)</v-btn>,
              <v-btn text small class="ma-0 pa-1">Titre (XX / XX)</v-btn>,
              <v-btn text small class="ma-0 pa-1">Titre (XX / XX)</v-btn>
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
    <v-card class="mb-2" v-if="validMesTextes" card="text-truncate">
      <v-card-title>Bibliothèque personnelle</v-card-title>
      <v-data-table :headers="headersEdit" :items="mesTextes">
        <template v-slot:item.titre="{ item }">
          <v-btn
            text
            :to=" '/' + item.id + '/chapitre' "
            class="deep-orange--text text--accent-2"
          >{{item.titre}}</v-btn>
        </template>
        <template v-slot:item.actions="{ item }">
          <EditHistoire :histoire="mesTextes" :item="item" />
          <DeleteHistoire :histoire="mesTextes" :item="item" />
        </template>
      </v-data-table>
    </v-card>
    <v-card>
      <v-card-title>
        Bibliothèque
        <v-spacer></v-spacer>
        <v-btn icon v-if="utilisateur">
          <CreateHistoire />
        </v-btn>
      </v-card-title>
      <v-data-table :headers="headers" :items="texte">
        <template v-slot:item.titre="{ item }">
          <v-btn
            text
            :to=" '/' + item.id + '/chapitre' "
            class="deep-orange--text text--accent-2"
          >{{item.titre}}</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script src="./Bibliotheque.js"></script>