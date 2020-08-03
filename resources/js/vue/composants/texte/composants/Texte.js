import Axios from "axios";
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
import EventBus from "../../../EventBus.js"

export default {
    components: { TiptapVuetify },
    data: () => ({
        texte: [],
        police: 12,
    }),
    created() {
        this.getChapitre();
        console.log(this.police)
    },
    methods: {
        getChapitre() {
            Axios.get('/api/' + this.$route.params.id + '/texte').then(
                ({ data }) => {
                    this.texte = data[0].texte
                }
            )
        }
    },
    mounted() {
        EventBus.$on("upPolice", function (police) {
            this.police = police
            console.log("up " + this.police)
        });
        EventBus.$on("downPolice", function (police) {
            this.police = police
            console.log("down " + this.police)
        });
    }
}