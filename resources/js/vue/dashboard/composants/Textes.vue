<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="datas"
      sort-by="data"
      class="elevation-1"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      show-expand
    >
      <template v-slot:top class="d-flex justify-space-between">
        <v-toolbar flat color="white">
          <v-toolbar-title>Liste des Histoires</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:item.auteur="{ item }">{{ item.id_auteur.name}}</template>
      <template v-slot:item.actions="{ item }">
        <EditHistoire :stories="datas" :item="item" />
        <DeleteHistoire :item="item" />
      </template>

      <template v-slot:expanded-item="{headers, item}" class="d-flex justify-center">
        <td :colspan="headers.length">
          <v-data-table
            :headers="chapitre"
            :items="item.chapitre"
            sort-by="data"
            class="elevation-5 ma-5"
          >
            <template v-slot:top class="d-flex justify-space-between">
              <v-toolbar flat color="white">
                <v-toolbar-title>Liste des Chapitres</v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <EditChapitre :chapitre="chapitre" :chapter="item.chapitre" :item="item" />
              <DeleteChapitre :chapitre="chapitre" :item="item" />
            </template>
          </v-data-table>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script src="./Textes.js"></script>

<style lang="css">
.v-toolbar__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>