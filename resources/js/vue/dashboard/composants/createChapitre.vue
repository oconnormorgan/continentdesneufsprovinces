<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon icon class="pa-2">mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card class="ma-2 pa-5">
      <v-text-field class="ma-5 pa-5" v-model="numero" label="Numero du chapitre"></v-text-field>
      <v-text-field class="ma-5 pa-5" v-model="titre" label="Titre"></v-text-field>
      <tiptap-vuetify class="ma-5 pa-5" v-model="content" :extensions="extensions" label="Resumé" />
     <v-row class="ma-5 pa-5" >
        <v-col>
          <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="save">
            <v-icon icon class="pa-5">mdi-check</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="save">
            <v-icon icon class="pa-5">mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script src="./createChapitre.js"></script>