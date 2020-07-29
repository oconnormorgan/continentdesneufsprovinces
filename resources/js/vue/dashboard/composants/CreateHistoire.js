export default {
    data: () => ({
        // starting editor's content
        content: '',
        titre: ''
    }),
    methods: {
        save() {
            console.log("toto");
            axios.post('/api/texte/create', {
                    titre: this.titre,
                    resumé: this.content,
                })
                .then(({
                    data,
                }) => {
                    console.log(data)
                })
        },
    }
}