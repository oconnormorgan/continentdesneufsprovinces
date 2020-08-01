import { authenticationService } from "../../../_services/authentication.service"

export default {
    data: () => ({
        content: '',
        titre: '',
        dialog: false,
        utilisateur: false
    }),
    created() {
        authenticationService.currentUser.subscribe(x => (this.currentUser = x));
      },
    methods: {
        save() {
            axios.post('/api/texte/create', {
                    titre: this.titre,
                    resumé: this.content,
                    id_auteur: this.currentUser.id
            })
        },
        close() {
            this.dialog = false
        }
    }
}