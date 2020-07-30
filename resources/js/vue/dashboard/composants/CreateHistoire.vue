<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon icon class="pa-2">mdi-pencil-plus</v-icon>
      </v-btn>
    </template>
    <v-card class="ma-2 px-5">
      <v-card-title>Crée une nouvelle Histoire</v-card-title>
      <v-text-field class="px-5" v-model="titre" label="Titre"></v-text-field>
      <v-textarea class="px-5" v-model="content" label="Resumé"></v-textarea>
      <v-row class="ma-0 pa-0" >
        <v-col>
          <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="save">
            <v-icon icon class="px-5">mdi-check</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="close">
            <v-icon icon class="px-5">mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script src="./CreateHistoire.js"></script>