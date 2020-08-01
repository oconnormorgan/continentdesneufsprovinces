export default {
    props: ["histoire","item"],
    data: () => ({
        // starting editor's content
        content: '',
        titre: '',
        id_histoire: '',
        dialog: false,
        utilisateur: false,
    }),
    methods: {
        save() {
            axios.post('/api/texte/edit', {
                    titre: this.titre,
                    resumé: this.content,
                    id_histoire : this.id_histoire
            })
        },
        close() {
            this.dialog = false
        },
        openDialog(item){
            this.titre = item.titre,
            this.content = item.resumé,
            this.id_histoire = item.id
        }
    }
}