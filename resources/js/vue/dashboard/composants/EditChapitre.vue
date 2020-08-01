<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" @click="openDialog(item)">
        <v-icon icon class="pa-2">mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card class="ma-2 px-5">
      <v-card-title>
        Éditer un chapitre
        <v-spacer></v-spacer>
        <v-icon @click="close" icon class="px-5">mdi-close</v-icon>
      </v-card-title>
      <v-text-field class="px-5" v-model="numéro" label="Numero du chapitre"></v-text-field>
      <v-text-field class="px-5" v-model="titre" label="Titre"></v-text-field>
      <tiptap-vuetify class="pa-5" v-model="content" :extensions="extensions" label="Resumé" />
      <v-checkbox v-if="isAdmin" class="px-5" v-model="isValid" label="Chapitre validé ?"></v-checkbox>
      <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="save">
        <v-icon icon class="pa-1">mdi-check</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script src="./EditChapitre.js"></script>