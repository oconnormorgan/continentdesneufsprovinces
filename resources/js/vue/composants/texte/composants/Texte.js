export default {
    data: () => ({
        police: 10,
        textes: [],
    }),
    created() {
        this.initialisation();
    },
    methods: {
        initialisation() {
            axios.get('/textes')
                .then(({ data }) => {
                    data.data.forEach(data => {
                        this.textes.push(data);
                    })
                })
        }
    }
}