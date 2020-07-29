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
        disabled: true,
      },
      {
        text: "Chapitre",
        disabled: true,
      },
      {
        text: "Texte 1",
        disabled: true,
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