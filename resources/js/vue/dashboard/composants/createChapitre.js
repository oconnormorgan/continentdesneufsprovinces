import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
    // specify TiptapVuetify component in "components"
    components: { TiptapVuetify },
    data: () => ({
        // declare extensions you want to use
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
        // starting editor's content
        content: '',
        titre: '',
        numero: '',
        dialog: false,
    }),
    methods: {
        save() {
            axios.post('/api/texte/chapitre', {
                numero: this.numero,
                titre: this.titre,
                texte: this.content,
            })
        },
        close() {
            this.dialog = false
        }
    }
}