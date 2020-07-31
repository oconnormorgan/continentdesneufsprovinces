export default {
    props: ["histoire"],
    data: () => ({
        // starting editor's content
        content: '',
        titre: '',
        dialog: false,
        utilisateur: false,
    }),
    created() {
        console.log(this.histoire)
    },
    methods: {
        save() {
            axios.post('/api/texte/create', {
                    titre: this.titre,
                    resumé: this.content,
            })
        },
        close() {
            this.dialog = false
        }
    }
}