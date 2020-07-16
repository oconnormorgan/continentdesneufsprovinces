<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon icon class="pa-2">mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card class="ma-0 px-2 pt-2">
      <v-text-field v-model="titre" label="titre"></v-text-field>
      <tiptap-vuetify v-model="content" :extensions="extensions" />
      <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="save">
        <v-icon icon class="pa-5">mdi-check</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script src="./CreateTexte.js"></script>