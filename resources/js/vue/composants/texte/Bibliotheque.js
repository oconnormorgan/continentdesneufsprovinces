import Axios from "axios";
import CreateHistoire from '../../dashboard/composants/CreateHistoire.vue';
import EditHistoire from '../../dashboard/composants/EditHistoire.vue';

import { authenticationService } from "../../../_services/authentication.service"

export default {
  components: {
    CreateHistoire,
    EditHistoire
  },
  data() {
    return {
      search: "",
      headersEdit: [
        {
          text: "Titre",
          align: "start",
          value: "titre",
        },
        { text: "Auteur", value: "id_auteur.name" },
        { text: "Action", value: "actions" }
      ],
      headers: [
        {
          text: "Titre",
          align: "start",
          value: "titre",
        },
        { text: "Auteur", value: "id_auteur.name" },
      ],
      texte: [],
      mesTextes: [],
      validMesTextes: false,
    };
  },
  created() {
    authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    this.getUtilisateur();
    this.getHistoire();
  },
  methods: {
    getHistoire() {
      Axios.get('/api/textes').then(
        ({ data }) => {
          data.data.forEach(_data => {
            if (_data.chapitre.length > 0) {
              this.texte.push(_data)
            }

            if (this.currentUser != null) {
              if (_data.id_auteur.id == this.currentUser.id) {
                this.validMesTextes = true
                this.mesTextes.push(_data);
              }
            }
          });
        }
      )
    },
    getUtilisateur() {
      if (this.currentUser == null) {
        this.utilisateur = false
      } else {
        this.utilisateur = true
      }
    },
  }
}