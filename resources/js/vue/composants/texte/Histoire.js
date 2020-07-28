import Texte from "./composants/Texte.vue"
import Axios from "axios";

export default {
  components : {
    Texte
  },
  data: () => ({
    dialog: false,
    police: 10,
    items: [
      {
        text: "Biblothéque",
        disabled: false,
        href: "bibliotheque"
      },
      {
        text: "Chapitre",
        disabled: false,
        href: "chapitre"
      },
      {
        text: "Texte 1",
        disabled: true,
        href: "histoire"
      }
    ]
  }),
  methods: {
    increase() {
      this.police += 2;
    },
    decrease() {
      this.police -= 2;
    },
  },
};