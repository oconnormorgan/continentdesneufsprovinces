import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
    props: ["chapitre", "item"],
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
        utilisateur: false
    }),
    methods: {
        save() {
            axios.post('/api/texte/chapitre/edit', {
                numero: this.numéro,
                titre: this.titre,
                texte: this.content,
                id_chapitre: this.id_chapitre
            })
        },
        close() {
            this.dialog = false
        },
        openDialog(item) {
            this.titre = item.titre,
                this.content = item.texte,
                this.numéro = item.numero,
                this.id_chapitre = item.id
        }
    }
}