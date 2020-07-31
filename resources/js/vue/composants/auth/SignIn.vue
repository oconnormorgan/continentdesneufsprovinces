<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="deep-black" dark flat>
            <v-toolbar-title>S'enregistrer</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                label="Nom d'utilisateur"
                v-model="name"
                name="login"
                :rules="pseudoRules"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                label="Email de connexion"
                v-model="email"
                name="login"
                :rules="emailRules"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                label="Mot de passe"
                v-model="password"
                :rules="pwdRules"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-text-field
                label="Mot de passe (confirmation)"
                v-model="passwordConfirm"
                :rules="pwdRules"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined color="success" :disabled="!valid" @click="save">Connexion</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src='./SignIn.js'></script>