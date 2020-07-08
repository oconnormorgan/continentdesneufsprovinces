import Carousel from './accueil/Carousel.vue';
import Apropos from './accueil/Apropos.vue';
import Histoire from './accueil/Histoire.vue';


import {
  authenticationService
} from "../../_services/authentication.service.js";

export default {
    components: {
        Carousel,
        Apropos,
        Histoire,
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
