<template>
  <v-container fluid>
    <v-data-table :headers="headers" :items="datas" sort-by="data" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Liste des Utilisateurs</v-toolbar-title>
          <CreateUtilisateur />
        </v-toolbar>
      </template>

      <template v-slot:item.role="{ item }">{{ item.role.role }}</template>
      <template v-slot:item.actions="{ item }">
        <DeleteUtilisateur :utilisateur="datas" :item="item" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script src="./Utilisateurs.js"></script>