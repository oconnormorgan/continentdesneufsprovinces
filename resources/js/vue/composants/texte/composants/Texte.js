import Axios from "axios";
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
    components: { TiptapVuetify },
    data: () => ({
        police: 12,
        texte: [],
    }),
    created() {
        this.getChapitre();
    },
    methods: {
        getChapitre() {
            Axios.get('/api/' + this.$route.params.id + '/texte').then(
              ({ data }) => {
                  this.texte = data[0].texte
              }
            )
          }
    }
}