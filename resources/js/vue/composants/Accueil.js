import Carousel from './accueil/Carousel.vue';

import {
  authenticationService
} from "../../_services/authentication.service.js";

export default {
    components: {
        Carousel,
    },
    data() {
        return {
            colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4"
            ],
        };
    },
    computed: {
        username() {
            // We will see what `params` is shortly
            return this.$route.params.username
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    },
    created() {
        authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    },
}
