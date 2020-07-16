import Utilisateurs from "./composants/Utilisateurs.vue";
import Textes from "./composants/Textes.vue";

export default {
  components: {
    Utilisateurs,
    Textes
  },
    data() {
      return {
        model: null,
        items: [
            'Utilisateurs',
            'Textes',
        ],
      };
    }
  };