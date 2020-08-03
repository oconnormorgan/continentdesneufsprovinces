export default {
    props: ["utilisateur","item"],
    data() {
        return {
            dialog: false,
            id_utilisateur: ''
        };
    },
    methods: {
        deleteItem(item) {
            axios.delete('/api/user/' + item.id)
            this.close();
        },
        close() {
            this.dialog = false
        },
        openDialog(item){
            this.id_utilisateur = item.id
        }
    }
};