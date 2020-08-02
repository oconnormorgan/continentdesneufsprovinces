import EventBus from '../../EventBus.js';
export default {
    props: ["histoire", "item", "stories"],
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
                id_histoire: this.id_histoire
            }).then(response => {
                const index = this.stories.indexOf(this.item);
                this.stories.splice(index, 1, response.data.data)
            })
            this.close();
        },
        close() {
            this.dialog = false
        },
        openDialog(item) {
            this.titre = item.titre,
                this.content = item.resumé,
                this.id_histoire = item.id
        }
    }
}