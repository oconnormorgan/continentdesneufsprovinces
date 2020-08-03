export default {
    props: ["chapitre","item"],
    data() {
        return {
            dialog: false,
            id_chapitre: ''
        };
    },
    methods: {
        deleteItem(item) {
            axios.delete('/api/texte/chapitre/' + item.id)
            this.close();
        },
        close() {
            this.dialog = false
        },
        openDialog(item){
            this.id_chapitre = item.id
        }
    }
};