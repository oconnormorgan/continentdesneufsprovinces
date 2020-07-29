<template>
  <v-container fluid>
    <v-data-table :headers="headers" :items="datas" sort-by="data" class="elevation-1">
      <template v-slot:top class="d-flex justify-space-between">
        <v-toolbar flat color="white">
          <v-toolbar-title>Liste des Textes</v-toolbar-title>
          <CreateHistoire />
        </v-toolbar>
      </template>

      <template v-slot:item.auteur="{ item }">{{ item.id_auteur.name}}</template>
      <template v-slot:item.actions="{ item }">
        <v-icon icon @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon icon @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script src="./Textes.js"></script>

<style lang="css">
.v-toolbar__content {
    width : 100%;
    display: flex;
    justify-content: space-between;
}
</style>