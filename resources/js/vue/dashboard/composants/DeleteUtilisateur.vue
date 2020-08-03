<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" @click="openDialog(item)">
        <v-icon icon class="pa-2">mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card class="justify-center">
      <v-card-title class="justify-center">Êtes vous sur de vouloir supprimer l'utilisateur' ?</v-card-title>
      <v-card-actions class="justify-center">
        <v-btn icon class="justify-center" rounded color="orange" @click="deleteItem(item)">
          <v-icon icon class="pa-1">mdi-check</v-icon>
        </v-btn>
        <v-btn icon class="justify-center" rounded @click="close">
          <v-icon icon class="px-5">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src='./DeleteUtilisateur.js'></script>