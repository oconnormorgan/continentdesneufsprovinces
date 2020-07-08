<template>
  <v-app class="ma-0 pa-0">
    <v-container fluid class="ma-0 pa-0">
      <Navbar />
    </v-container>
    <v-main class="blue-grey lighten-4">
      <v-container fluid class="ma-0 pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>