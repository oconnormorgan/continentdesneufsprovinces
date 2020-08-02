import Axios from "axios";
import CreateChapitre from "../../dashboard/composants/createChapitre.vue"
import EditChapitre from "../../dashboard/composants/EditChapitre.vue"
import DeleteChapitre from "../../dashboard/composants/DeleteChapitre.vue"


import { authenticationService } from "../../../_services/authentication.service"

export default {
  components: {
    CreateChapitre,
    EditChapitre,
    DeleteChapitre
  },
  data() {
    return {
      search: "",
      header: [
        {
          text: "Titre",
          align: "start",
          value: "titre"
        },
        { text: "Chapitre", value: "numero" },
        { text: "Action", value: "actions" },
      ],
      headers: [
        {
          text: "Titre",
          align: "start",
          value: "titre"
        },
        { text: "Numero", value: "numero" },
      ],
      chapitres: [],
      auteur: false,
      id_auteur: '',
      histoireTitre: '',
      histoireResumé: '',
    };
  },
  created() {
    authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    this.getChapitre();
  },
  methods: {
    getChapitre() {
      Axios.get('/api/' + this.$route.params.id + '/chapitre').then(
        ({ data }) => {
          this.chapitres = data[0].chapitre
          this.id_auteur = data[0].id_auteur
          if(this.currentUser != null) {
            if (this.currentUser.id == this.id_auteur) {
              this.auteur = true
            } else {
              this.auteur = false
            }
          }
          this.histoireTitre = data[0].titre
          this.histoireResumé = data[0].resumé
        }
      )
    },
  }
};