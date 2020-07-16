import CreateTexte from './CreateTexte.vue';

export default {
    components : {
        CreateTexte
    },
    data() {
        return {
            headers: [{
                    text: 'Titre',
                    align: 'start',
                    sortable: false,
                    value: 'titre'
                },
                {
                    text: 'Auteur',
                    value: 'auteur'
                },
                {
                    text: 'Actions',
                    value: 'actions'
                },
            ],
            datas: [],
        }
    },
    created() {
        this.initalisation();
    },
    methods: {
        initalisation() {
            axios.get('/api/textes')
                .then(({
                        data
                    }) =>
                    data.data.forEach(data => {
                        this.datas.push(data);
                    })
                )
                .catch();
        },
    }
}