import EditHistoire from './EditHistoire.vue';
import EditChapitre from './EditChapitre.vue';


export default {
    components: {
        EditHistoire,
        EditChapitre
    },
    data() {
        return {
            expanded: [],
            singleExpand: false,
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
                text: 'Action',
                value: 'actions'
            },
            { text: 'Chapitre', value: 'data-table-expand' },
            ],
            chapitre: [{
                text: 'Titre',
                align: 'start',
                sortable: false,
                value: 'titre'
            },
            {
                text: 'Chapitre',
                value: 'numero'
            },
            {
                text: 'Action',
                value: 'actions'
            }
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