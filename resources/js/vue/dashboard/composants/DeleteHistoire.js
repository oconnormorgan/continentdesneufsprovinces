export default {
    props: ["histoire","item"],
    data() {
        return {
            dialog: false,
            id_histoire: ''
        };
    },
    methods: {
        deleteItem(item) {
            axios.delete('/api/texte/' + item.id)
        },
        close() {
            this.dialog = false
        },
        openDialog(item){
            this.id_histoire = item.id
        }
    }
};