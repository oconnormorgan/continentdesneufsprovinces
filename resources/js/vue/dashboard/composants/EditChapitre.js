import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
import { authenticationService } from "../../../_services/authentication.service"

export default {
    props: ["chapter", "item"],
    components: { TiptapVuetify },
    data: () => ({
        extensions: [
            History,
            Blockquote,
            Underline,
            Strike,
            Italic,
            Bold,
            [Heading, {
                options: {
                    levels: [3, 4, 5]
                }
            }],
            HorizontalRule,
            Paragraph,
            HardBreak
        ],
        content: '',
        titre: '',
        id_chapitre: '',
        numéro: '',
        dialog: false,
        utilisateur: false,
        isValid: false,
        id_validation: ''
    }),
    created() {
        authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    },
    methods: {
        save() {
            if (this.isValid == true ) {
                this.id_validation = 2
            } else {
                this.id_validation = 1
            }
            axios.post('/api/texte/chapitre/edit', {
                numero: this.numéro,
                titre: this.titre,
                texte: this.content,
                id_chapitre: this.id_chapitre,
                id_validation: this.id_validation
            }).then(response => {
                const index = this.chapter.indexOf(this.item);
                this.chapter.splice(index, 1, response.data.data)
            })
            this.close();
        },
        close() {
            this.dialog = false
        },
        openDialog(item) {
            this.titre = item.titre,
                this.content = item.texte,
                this.numéro = item.numero,
                this.id_chapitre = item.id
        },
        isAdmin() {
            if (!_.isEmpty(this.currentUser)) {
                return this.currentUser.id_role.role == "Admin";
            }
        },
    }
}