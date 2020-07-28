import Axios from "axios";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Titre",
          align: "start",
          value: "titre"
        },
        { text: "Numero", value: "numero" },
      ],
      chapitres: []
    };
  },
  created() {
    this.getChapitre()
  },
  methods: {
    getChapitre() {
      Axios.get('/api/' + this.$route.params.id + '/chapitre').then(
        ({ data }) => {
            this.chapitres = data[0].chapitre
            console.log(this.chapitres)
        }
      )
    }
  }
};