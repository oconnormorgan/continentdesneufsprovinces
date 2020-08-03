import Texte from "./composants/Texte.vue"
import EventBus from "../../EventBus.js"

export default {
  components : {
    Texte
  },
  data: () => ({
    dialog: false,
    police: 12,
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
      EventBus.$emit('upPolice', this.police);
    },
    decrease() {
      this.police -= 2;
      EventBus.$emit('downPolice', this.police);
    },
  },
};