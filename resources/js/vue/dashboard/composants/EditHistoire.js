export default {
    data: () => ({
        // starting editor's content
        content: '',
        titre: '',
        dialog: false,
        utilisateur: false
    }),
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