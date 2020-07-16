import Vue from "vue";
import Route from './router.js';

import Vuetify from "vuetify";

//TIP-TAP
// import plugin
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// don't forget to import CSS styles
import 'tiptap-vuetify/dist/main.css'

import 'vuetify/dist/vuetify.min.css';
import Layout from './layout/layout';

const vuetify = new Vuetify()

Vue.use(Vuetify);

Vue.use(TiptapVuetifyPlugin, {
    // the next line is important! You need to provide the Vuetify Object to this place.
    vuetify, // same as "vuetify: vuetify"
    // optional, default to 'md' (default vuetify icons before v2.0.0)
    iconsGroup: 'mdi'
  })

const app = new Vue({
    router: Route,
    el: '#app',
    components: { Layout },
    vuetify: new Vuetify({}),
})

export default new Vuetify(app)
