<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon icon class="pa-2">mdi-account-plus</v-icon>
      </v-btn>
    </template>
    <v-card class="ma-2 px-5">
      <v-card-title>
        Crée un utilisateur
        <v-spacer></v-spacer>
        <v-icon @click="close" icon class="px-5">mdi-close</v-icon>
      </v-card-title>
      <v-text-field class="px-5" v-model="name" label="Nom d'utilisateur"></v-text-field>
      <v-text-field class="px-5" v-model="email" label="E-mail"></v-text-field>
      <v-text-field class="px-5" v-model="password" label="Mot de passe"></v-text-field>
      <v-text-field class="px-5" v-model="passwordConfirm" label="Mot de passe (confirmation)"></v-text-field>
      <v-checkbox class="px-5" v-model="isAdmin" label="Administrateur ?"></v-checkbox>
      <v-btn icon width="100%" class="justify-center" rounded color="orange" @click="save">
        <v-icon icon class="pa-1">mdi-check</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script src='./CreateUtilisateur.js'></script>